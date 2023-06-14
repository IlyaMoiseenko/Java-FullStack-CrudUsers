package com.markalfox.web.controller;

import com.markalfox.web.model.Human;
import com.markalfox.web.repository.HumanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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
}
