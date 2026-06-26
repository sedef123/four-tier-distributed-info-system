package com.sau.backend.service;

import com.sau.backend.model.Assignment;
import com.sau.backend.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssignmentService {

    @Autowired
    private AssignmentRepository assignmentRepository;

    public List<Assignment> getAll() {
        return assignmentRepository.findAll();
    }

    public Assignment save(Assignment assignment) {
        Assignment saved = assignmentRepository.save(assignment);
        return assignmentRepository.findById(saved.getId()).orElse(saved);
    }

    public void delete(Integer id) {
        assignmentRepository.deleteById(id);
    }
}