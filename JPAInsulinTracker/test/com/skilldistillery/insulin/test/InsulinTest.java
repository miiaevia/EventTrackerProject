package com.skilldistillery.insulin.test;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.insulin.entities.InsulinTreatment;

public class InsulinTest {
	private EntityManagerFactory emf; 
	private EntityManager em;
	private InsulinTreatment treatment; 
	
	@BeforeEach
	void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("Insulin"); 
		em = emf.createEntityManager(); 
		treatment = em.find(InsulinTreatment.class, 1); 
	}
	
	@AfterEach
	void tearDown() throws Exception {
		em.close();
		emf.close();
	}
	
	@Test
	void test_entity_mapping() {
		assertEquals(10, treatment.getUnits()); 
	}
}
