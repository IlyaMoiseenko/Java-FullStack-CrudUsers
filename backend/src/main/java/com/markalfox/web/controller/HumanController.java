package com.markalfox.web.controller;

import com.markalfox.web.exception.UserNotFoundException;
import com.markalfox.web.model.Human;
import com.markalfox.web.repository.HumanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class HumanController {
    private final HumanRepository humanRepository;

    @Autowired
    public HumanController(HumanRepository humanRepository) {
        this.humanRepository = humanRepository;
    }

    @PostMapping("/user")
    public Human newHuman(@RequestBody Human newHuman) {
        return humanRepository.save(newHuman);
    }

    @GetMapping("/users")
    public List<Human> gteAllUser() {
        return humanRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public Human getUserById(@PathVariable long id) {
        return humanRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }
}
