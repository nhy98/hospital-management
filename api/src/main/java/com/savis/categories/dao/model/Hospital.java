package com.savis.categories.dao.model;
// Generated Sep 27, 2017 3:09:01 PM by Hibernate Tools 5.2.5.Final

import java.util.List;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
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
@Table(name = "HOSPITAL", schema = "public", catalog = "20192-web-programming")
public class Hospital extends BaseModel {

	@Column(name = "address")
    private String address;

	@Access(AccessType.FIELD)
    @Column(name = "hospital_name")
    private String hospitalName;

    @Column(name = "mobile")
    private String website;
    
    @Column(name = "description")
    private String description;
    
    @Column(name = "hotline")
    private String hotline;
    
    @Column(name = "email")
    private String email;
    
    @Access(AccessType.FIELD)
    @Column(name = "image_url")
    private String imageUrl;
  
}
