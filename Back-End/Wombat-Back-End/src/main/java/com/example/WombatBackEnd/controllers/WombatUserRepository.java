package com.example.WombatBackEnd.controllers;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.WombatBackEnd.entities.WombatUser;

public interface WombatUserRepository extends JpaRepository<WombatUser, Integer> {
	

}
