package com.skilldistillery.insulin.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.insulin.entities.InsulinTreatment;
import com.skilldistillery.insulin.services.InsulinService;

@RestController
@RequestMapping("api")
public class InsulinController {
	
	@Autowired
	private InsulinService insulinSvc; 
	
	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}
	
	@RequestMapping(path="treatments", method = RequestMethod.GET)
	public List<InsulinTreatment> index() {
		return insulinSvc.index();
	}
	
	@RequestMapping(path="treatments/{id}", method = RequestMethod.GET)
	public InsulinTreatment show(@PathVariable int id) {
		return insulinSvc.show(id);
	}
	
	@RequestMapping(path = "treatments", method = RequestMethod.POST)
	public InsulinTreatment create(@RequestBody InsulinTreatment treatment) {
		return insulinSvc.create(treatment);
	}
	
	@RequestMapping(path = "treatments/{id}", method = RequestMethod.PATCH) 
		public InsulinTreatment replace(@PathVariable int id, @RequestBody InsulinTreatment treatment) {
			return insulinSvc.update(treatment, id);
		}
	
	@RequestMapping(path = "treatments/{id}", method = RequestMethod.DELETE) 
		public Boolean destroy(@PathVariable int id) {
			return false;
	}
}
