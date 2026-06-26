package com.sau.backend.controller;

import com.sau.backend.model.Vehicle;
import com.sau.backend.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "*")
public class VehicleController {

    @Autowired
    VehicleRepository repo;

    @GetMapping
    public List<Vehicle> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Vehicle create(@RequestBody Vehicle v) {
        return repo.save(v);
    }

    @PutMapping("/{id}")
    public Vehicle update(@PathVariable Integer id, @RequestBody Vehicle v) {
        v.setId(id);
        return repo.save(v);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        repo.deleteById(id);
    }
}