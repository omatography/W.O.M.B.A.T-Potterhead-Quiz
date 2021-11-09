package com.example.WombatBackEnd.entities;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class WombatQuestion {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String question;
	String[] options;
	int answer;
	
	@Override
	public String toString() {
		return "WombatQuestion [id=" + id + ", question=" + question + ", options=" + Arrays.toString(options)
				+ ", answer=" + answer + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String[] getOptions() {
		return options;
	}
	public void setOptions(String[] options) {
		this.options = options;
	}
	public int getAnswer() {
		return answer;
	}
	public void setAnswer(int answer) {
		this.answer = answer;
	}
	
	
}
