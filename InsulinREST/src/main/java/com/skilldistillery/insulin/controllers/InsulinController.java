package com.skilldistillery.insulin.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
}
