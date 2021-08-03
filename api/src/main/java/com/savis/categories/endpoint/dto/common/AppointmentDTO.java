package com.savis.categories.endpoint.dto.common;

import java.util.List;

import com.savis.categories.dao.model.Appointment;

public class AppointmentDTO {
	private List<Appointment> declined;
	private List<Appointment> accepted;
	private List<Appointment> pending;
	public List<Appointment> getDeclined() {
		return declined;
	}
	public void setDeclined(List<Appointment> declined) {
		this.declined = declined;
	}
	public List<Appointment> getAccepted() {
		return accepted;
	}
	public void setAccepted(List<Appointment> accepted) {
		this.accepted = accepted;
	}
	public List<Appointment> getPending() {
		return pending;
	}
	public void setPending(List<Appointment> pending) {
		this.pending = pending;
	}
	public AppointmentDTO(List<Appointment> declined, List<Appointment> accepted, List<Appointment> pending) {
		super();
		this.declined = declined;
		this.accepted = accepted;
		this.pending = pending;
	}
	public AppointmentDTO() {
		super();
	}
	
	
}
