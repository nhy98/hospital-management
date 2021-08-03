package com.savis.categories.dao.model;
// Generated Sep 27, 2017 3:09:01 PM by Hibernate Tools 5.2.5.Final

import java.util.Date;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.CascadeType;
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
@Table(name = "APPOINTMENT", schema = "public", catalog = "20192-web-programming")
public class Appointment extends BaseModel {

	@Column(name = "dob")
    private String dob;

    @Column(name = "reason")
    private String reason;

    @Access(AccessType.FIELD)
    @Column(name = "created_date")
    private String createdDate;
    
    @Access(AccessType.FIELD)
    @Column(name = "appointed_date")
    private String appointedDate;
    
    @Column(name = "state")
    private Integer state;
    
    @Column(name = "username")
    private String username;
    
    @Column(name = "address")
    private String address;
    
    @Column(name = "mobile")
    private String mobile;
    
    @Column(name = "email")
    private String email;
    
	@Access(AccessType.FIELD)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;
}
