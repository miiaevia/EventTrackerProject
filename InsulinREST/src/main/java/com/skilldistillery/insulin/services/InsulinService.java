package com.skilldistillery.insulin.services;

import java.util.List;

import com.skilldistillery.insulin.entities.InsulinTreatment;

public interface InsulinService {
	public List<InsulinTreatment> index();
	
	public InsulinTreatment show(int id);
	
	public InsulinTreatment create(InsulinTreatment t); 
	
	public InsulinTreatment update(InsulinTreatment t, int id); 
	
	public Boolean destroy (int id); 
}
