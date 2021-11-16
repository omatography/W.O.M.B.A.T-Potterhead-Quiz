package com.example.WombatBackEnd.controllers;

import java.util.List;
import java.util.Optional;

import org.aspectj.weaver.patterns.TypePatternQuestions.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.WombatBackEnd.entities.WombatQuestion;
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
	
	@PatchMapping("/{quizid}/addqn")
	public void assignQuestion(@PathVariable("quizid") int quizid, @RequestBody WombatQuestion qn) {
		System.out.println("Hooo");
		WombatQuiz quiz = wombatquizRepository.findById(quizid);
//		System.out.println("Hooo");
		System.out.println(quiz);
		List<WombatQuestion> questions = quiz.getQuestions();
		questions.add(qn);
		quiz.setQuestions(questions);
		
		
		wombatquizRepository.save(quiz);

		
	}
	
	@PatchMapping("/{quizid}/deleteqn/{qid}")
	public void assignQuestion(@PathVariable("quizid") int quizid, @PathVariable("qid") int qid) {
		System.out.println("Hooo");
		WombatQuiz quiz = wombatquizRepository.findById(quizid);
		System.out.println(quiz);
		List<WombatQuestion> questions = quiz.getQuestions();
		questions.remove(qid);
		quiz.setQuestions(questions);
		
		
		wombatquizRepository.save(quiz);

		
	}
	
	
	
}
