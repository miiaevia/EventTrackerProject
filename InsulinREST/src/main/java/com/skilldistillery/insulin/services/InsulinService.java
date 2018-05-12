package com.skilldistillery.insulin.services;

import java.util.List;

import com.skilldistillery.insulin.entities.InsulinTreatment;

public interface InsulinService {
	public List<InsulinTreatment> index();
	
	public InsulinTreatment show(int id);
	
	public InsulinTreatment create(InsulinTreatment t); 
}
