package com.example.WombatBackEnd.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.WombatBackEnd.entities.WombatQuiz;

@RestController
@CrossOrigin
@RequestMapping("/wombatquiz")
public class WombatQuizController {
	@Autowired
	WombatQuizRepository wombatquizRepository;
	
	@GetMapping("/")
	public List<WombatQuiz> fetchAllQuizes(){
		return wombatquizRepository.findAll();
	}
	
	@PostMapping("/")
	public void addQuiz(@RequestBody WombatQuiz wombatquiz){
		wombatquizRepository.save(wombatquiz);
	}
}
