package com.resume.backend.controller;

import com.resume.backend.ResumeRequest;
import com.resume.backend.service.ResumeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/resumes")
@CrossOrigin("*")
public class ResumeController {

    private final ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @GetMapping("/health")
    public ResponseEntity<?> health() {
        return ResponseEntity.ok(
                Map.of("status", "UP")
        );
    }

    @PostMapping("/generate")
    public ResponseEntity<?> generate(@RequestBody ResumeRequest request) {

        try {

            if (request == null ||
                    request.description() == null ||
                    request.description().isBlank()) {

                return ResponseEntity.badRequest()
                        .body(Map.of("error", "description required"));
            }

            Map<String, Object> response =
                    resumeService.generateResumeResponse(request.description());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity.internalServerError()
                    .body(Map.of(
                            "error", "Resume generation failed"
                    ));
        }
    }
}
