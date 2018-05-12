package com.skilldistillery.insulin.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.insulin.entities.InsulinTreatment;
import com.skilldistillery.insulin.repositories.InsulinRepository;

@Service
public class InsulinServiceImpl implements InsulinService {
	@Autowired 
	private InsulinRepository insulinRepo;
	
	public List<InsulinTreatment> index() {
		return insulinRepo.findAll();
	}
	
	public InsulinTreatment show(int id) {
		return insulinRepo.findById(id).get(); 
	}

	@Override
	public InsulinTreatment create(InsulinTreatment t) {
		return insulinRepo.saveAndFlush(t);
	}
}
