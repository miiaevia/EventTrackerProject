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
	public void destroy(int id) {
		try {
			insulinRepo.deleteById(id);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public Integer totalAvgUnits() {
		List<InsulinTreatment> treatments = insulinRepo.findAll(); 
		Integer total = 0;
		Integer avg = 0;
		for ( InsulinTreatment t : treatments) {
			total += t.getUnits();
		}
		avg = total / treatments.size();
		return avg;
	}
	
	
}
