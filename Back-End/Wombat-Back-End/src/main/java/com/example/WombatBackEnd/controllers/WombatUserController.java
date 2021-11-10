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
import com.example.WombatBackEnd.entities.WombatUser;

@RestController
@CrossOrigin
@RequestMapping("/wombatuser")
public class WombatUserController {
	
	@Autowired
	WombatUserRepository wombatuserRepository;
	
	@GetMapping("/")
	public List<WombatUser> fetchAllQuizes(){
		return wombatuserRepository.findAll();
	}
	
	@PostMapping("/")
	public void addQuiz(@RequestBody WombatUser wombatuser){
		wombatuserRepository.save(wombatuser);
	}

}
