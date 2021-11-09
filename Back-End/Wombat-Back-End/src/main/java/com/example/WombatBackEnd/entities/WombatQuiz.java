package com.example.WombatBackEnd.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import java.util.List;

@Entity
public class WombatQuiz {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String name;
	@OneToMany(cascade = CascadeType.ALL)
	List<WombatQuestion> questions;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<WombatQuestion> getQuestions() {
		return questions;
	}
	public void setQuestions(List<WombatQuestion> questions) {
		this.questions = questions;
	}
	
	
	

}
