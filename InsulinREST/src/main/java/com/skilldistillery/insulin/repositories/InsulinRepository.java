package com.skilldistillery.insulin.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.insulin.entities.InsulinTreatment;

public interface InsulinRepository extends JpaRepository<InsulinTreatment, Integer> {

}
