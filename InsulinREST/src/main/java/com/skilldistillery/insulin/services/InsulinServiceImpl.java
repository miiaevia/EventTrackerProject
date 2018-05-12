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

	@Override
	public InsulinTreatment update(InsulinTreatment t, int id) {
		InsulinTreatment managedTreatment = insulinRepo.findById(id).get();
		if (t.getBrand() != null || !t.getBrand().equals("")) {
			managedTreatment.setBrand(t.getBrand());
		}
		if (t.getType() != null || !t.getType().equals("")) {
			managedTreatment.setType(t.getType());
		}
		if (t.getUnits() != 0) {
			managedTreatment.setUnits(t.getUnits());
		}
		return insulinRepo.saveAndFlush(managedTreatment);
	}

	@Override
	public Boolean destroy(int id) {
		try {
			insulinRepo.deleteById(id);
			return true;
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return false;
	}
}
