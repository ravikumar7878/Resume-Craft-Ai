package com.resume.backend.service;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.ollama.api.OllamaChatOptions;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@Service
public class ResumeServiceImpl implements ResumeService {

    /* ---------- EXECUTOR ---------- */
    private final ExecutorService aiExecutor =
            Executors.newFixedThreadPool(2);

    private final ChatClient chatClient;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public ResumeServiceImpl(ChatClient.Builder builder) {
        this.chatClient = builder.build();

        // ✅ MODEL WARMUP ON SERVER START (IMPORTANT SPEED FIX)
        warmupModel();
    }

    /* ---------- MODEL WARMUP ---------- */
    private void warmupModel() {
        aiExecutor.submit(() -> {
            try {

                Prompt prompt = new Prompt(
                        "Say ready",
                        OllamaChatOptions.builder()
                                .model("qwen2.5:0.5b")
                                .temperature(0.0)
                                .numPredict(5)
                                .build()
                );

                chatClient.prompt(prompt).call();
                System.out.println("✅ AI MODEL WARMED UP");

            } catch (Exception e) {
                System.out.println("⚠ Warmup failed");
            }
        });
    }

    @Override
    public Map<String, Object> generateResumeResponse(String description)
            throws IOException {

        String basePromptText =
                loadPromptFromFile("resume_prompt_base.txt");

        String qualityPromptText =
                loadPromptFromFile("resume_prompt_quality.txt");

        /* ---------- FAST MODEL CALL ---------- */
        CompletableFuture<Map<String, Object>> baseFuture =
                CompletableFuture.supplyAsync(() -> callModel(
                        "qwen2.5:0.5b",
                        basePromptText,
                        description,
                        120   // ✅ reduced tokens for speed
                ), aiExecutor);

        /* ---------- QUALITY MODEL (LOW TOKEN) ---------- */
        CompletableFuture<Map<String, Object>> qualityFuture =
                CompletableFuture.supplyAsync(() -> callModel(
                        "phi3:mini",
                        qualityPromptText,
                        description,
                        120   // ✅ reduced tokens
                ), aiExecutor);

        Map<String, Object> baseData = baseFuture.join();
        Map<String, Object> qualityData = qualityFuture.join();

        Map<String, Object> merged =
                mergeResumeJson(baseData, qualityData);

        return removeEmptyFields(merged);
    }

    /* ---------- MODEL CALL ---------- */
    private Map<String, Object> callModel(
            String model,
            String template,
            String description,
            int tokens) {

        try {

            Prompt prompt = new Prompt(
                    template.replace("{{userDescription}}", description),
                    OllamaChatOptions.builder()
                            .model(model)
                            .temperature(0.3)
                            .numPredict(tokens)
                            .build()
            );

            String response =
                    chatClient.prompt(prompt).call().content();

            return parseJsonResponse(response);

        } catch (Exception e) {
            return new HashMap<>();
        }
    }

    /* ---------- FILE LOAD ---------- */
    private String loadPromptFromFile(String filename)
            throws IOException {

        ClassPathResource resource =
                new ClassPathResource(filename);

        try (InputStream is = resource.getInputStream()) {
            return new String(is.readAllBytes());
        }
    }

    /* ---------- JSON PARSE ---------- */
    private Map<String, Object> parseJsonResponse(String response) {

        try {
            String cleaned = cleanAiJson(response);
            return objectMapper.readValue(cleaned, Map.class);
        } catch (Exception e) {
            return new HashMap<>();
        }
    }

    private String cleanAiJson(String response) {

        if (response == null) return "{}";

        response = response
                .replaceAll("(?i)```json", "")
                .replaceAll("```", "")
                .trim();

        int start = response.indexOf("{");
        int end = response.lastIndexOf("}");

        if (start != -1 && end != -1 && end > start) {
            return response.substring(start, end + 1);
        }

        return "{}";
    }

    /* ---------- MERGE ---------- */
    private Map<String, Object> mergeResumeJson(
            Map<String, Object> base,
            Map<String, Object> quality) {

        Map<String, Object> merged = new HashMap<>();
        merged.putAll(base);

        merged.put("experience",
                quality.getOrDefault("experience", new Object[0]));

        merged.put("projects",
                quality.getOrDefault("projects", new Object[0]));

        merged.put("achievements",
                quality.getOrDefault("achievements", new Object[0]));

        merged.putIfAbsent("certifications", new Object[0]);
        merged.putIfAbsent("languages", new Object[0]);
        merged.putIfAbsent("interests", new Object[0]);
        merged.putIfAbsent("skills", new Object[0]);
        merged.putIfAbsent("education", new Object[0]);

        return merged;
    }

    /* ---------- REMOVE EMPTY ---------- */
    private Map<String, Object> removeEmptyFields(
            Map<String, Object> data) {

        Map<String, Object> cleaned = new HashMap<>();

        data.forEach((k, v) -> {
            if (v != null) cleaned.put(k, v);
        });

        return cleaned;
    }
}
