package com.skilldistillery.insulin.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.insulin.entities.InsulinTreatment;
import com.skilldistillery.insulin.services.InsulinService;

@RestController
@CrossOrigin({"*", "http://localhost:4202"})
@RequestMapping("api")
public class InsulinController {
	
	@Autowired
	private InsulinService insulinSvc; 
	
	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping() {
		return "pong";
	}
	
	@RequestMapping(path="/")
	public String home() {
		return "index.html";
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
	
	@RequestMapping(path = "treatments/{id}", method = RequestMethod.PUT) 
		public InsulinTreatment replace(@PathVariable int id, @RequestBody InsulinTreatment treatment) {
			return insulinSvc.update(treatment, id);
		}
	
	@RequestMapping(path = "treatments/{id}", method = RequestMethod.DELETE) 
		public void destroy(@PathVariable int id) {
			insulinSvc.destroy(id);
	}
	
	@RequestMapping(path = "treatments/totalAvgUnits", method = RequestMethod.GET)
	public Integer getTotalAvgUnits() {
		return insulinSvc.totalAvgUnits(); 
	}
}
