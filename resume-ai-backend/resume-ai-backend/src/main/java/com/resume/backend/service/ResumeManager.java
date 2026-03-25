package com.resume.backend.service;  // lowercase 'service'

import com.resume.backend.entity.Resume;
import com.resume.backend.repository.ResumeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResumeManager {

    private final ResumeRepository resumeRepository;

    public ResumeManager(ResumeRepository resumeRepository) {
        this.resumeRepository = resumeRepository;
    }

    public Resume saveResume(Resume resume) {
        return resumeRepository.save(resume);
    }

    public List<Resume> getResumesByUserId(Long userId) {
        return resumeRepository.findByUserId(userId);
    }

    public Optional<Resume> getResumeById(Long id) {
        return resumeRepository.findById(id);
    }

    public void deleteResume(Long id) {
        resumeRepository.deleteById(id);
    }
}
