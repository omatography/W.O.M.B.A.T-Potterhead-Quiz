package com.example.WombatBackEnd.controllers;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.WombatBackEnd.entities.WombatQuiz;



public interface WombatQuizRepository extends JpaRepository<WombatQuiz, Integer> {
	
	
	
	 WombatQuiz findById(int id) ;
		
		

	
	
}
