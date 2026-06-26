package com.sau.backend.controller;

import com.sau.backend.model.Driver;
import com.sau.backend.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drivers")
@CrossOrigin(origins = "*")
public class DriverController {

    @Autowired
    DriverRepository repo;

    @GetMapping
    public List<Driver> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Driver create(@RequestBody Driver d) {
        return repo.save(d);
    }

    @PutMapping("/{id}")
    public Driver update(@PathVariable Integer id, @RequestBody Driver d) {
        d.setId(id);
        return repo.save(d);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        repo.deleteById(id);
    }
}
