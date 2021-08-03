package com.savis.categories.dao.model;
// Generated Sep 27, 2017 3:09:01 PM by Hibernate Tools 5.2.5.Final

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
@Table(name = "ACCOUNT", schema = "public", catalog = "20192-web-programming")
public class Account extends BaseModel {

	@Column(name = "address")
    private String address;

    @Column(name = "age")
    private Integer age;

    @Column(name = "mobile")
    private String mobile;
    
    @Column(name = "email")
    private String email;
    
    @Column(name = "fullname")
    private String fullname;
    
    @Column(name = "information")
    private String information;
    
    @Column(name = "username")
    private String username;
    
    @Column(name = "password")
    private String password;

    @Access(AccessType.FIELD)
    @Column(name = "user_type")
    private Integer userType;
    
    @Access(AccessType.FIELD)
    @Column(name = "working_position")
    private String workingPosition;
    
    @Column(name = "specialization")
    private String specialization;
    
    @Column(name = "avatar")
    private String avatar;
    
	@Access(AccessType.FIELD)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne
    @JoinColumn(name = "hospital_id")
    private Hospital hospital;
}
