package com.savis.categories.dao.model;
// Generated Sep 27, 2017 3:09:01 PM by Hibernate Tools 5.2.5.Final

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.savis.categories.common.base.domain.BaseModel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "MEDICAL_RECORD", schema = "public", catalog = "20192-web-programming")
public class MedicalRecord extends BaseModel {
	
	@Column(name = "symptom")
    private String symptom;
	
	@Column(name = "diagnostic")
    private String diagnostic;
	
	@Column(name = "prescription")
    private String prescription;
	
    @Access(AccessType.FIELD)
    @Column(name = "created_date")
    private String createdDate;
    
	@Column(name = "code")
    private String code;
	
	@Access(AccessType.FIELD)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne
    @JoinColumn(name = "appointment_id")
    private Appointment appointment;
}
