package com.skilldistillery.insulin.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name="insulin_treatment")
public class InsulinTreatment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id; 
	
	private int units;
	
	@CreationTimestamp
	@Temporal(TemporalType.DATE)
	@Column(name="treatement_date")
	private Date date; 
	
	@CreationTimestamp
	@Temporal(TemporalType.TIME)
	@Column(name="treatment_time")
	private Date time; 
	
	private String type;
	
	private String brand; 
	
	// contstructors
	public InsulinTreatment() {	}

	public InsulinTreatment(int id, int units, Date date, Date time, String type, String brand) {
		super();
		this.id = id;
		this.units = units;
		this.date = date;
		this.time = time;
		this.type = type;
		this.brand = brand;
	}
	
	
	//gets and sets
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUnits() {
		return units;
	}

	public void setUnits(int units) {
		this.units = units;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}
	
	
}
