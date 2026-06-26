package com.sau.backend.controller;

import com.sau.backend.model.Assignment;
import com.sau.backend.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assignments")
@CrossOrigin(origins = "*")
public class AssignmentController {

    @Autowired
    AssignmentRepository repo;

    @GetMapping
    public List<Assignment> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Assignment create(@RequestBody Assignment a) {
        Assignment saved = repo.save(a);
        return repo.findById(saved.getId()).orElse(saved);
    }

    @PutMapping("/{id}")
    public Assignment update(@PathVariable Integer id, @RequestBody Assignment a) {
        a.setId(id);
        return repo.save(a);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        repo.deleteById(id);
    }
}