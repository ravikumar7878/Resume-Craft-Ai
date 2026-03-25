package com.resume.backend.controller;

import com.resume.backend.entity.Resume;
import com.resume.backend.service.ResumeManager;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/resumes")
@CrossOrigin(
        origins = "http://localhost:5174",
        allowedHeaders = "*",
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS}
)
// frontend connection
public class ResumeApiController {

    private final ResumeManager resumeManager;

    public ResumeApiController(ResumeManager resumeManager) {
        this.resumeManager = resumeManager;
    }
    // Save resume
    @PostMapping
    public ResponseEntity<Resume> saveResume(@RequestBody Resume resume) {

        Resume saved = resumeManager.saveResume(resume);
        return ResponseEntity.ok(saved);
    }

    // Get all resumes by userId
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Resume>> getResumesByUser(@PathVariable Long userId) {
        List<Resume> resumes = resumeManager.getResumesByUserId(userId);
        return ResponseEntity.ok(resumes);
    }

    // Get resume by id
    @GetMapping("/{id}")
    public ResponseEntity<Resume> getResume(@PathVariable Long id) {
        return resumeManager.getResumeById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete resume
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteResume(@PathVariable Long id) {
        resumeManager.deleteResume(id);
        return ResponseEntity.ok("Resume deleted successfully");
    }
}
