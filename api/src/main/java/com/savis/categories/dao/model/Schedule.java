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
@Table(name = "SCHEDULE", schema = "public", catalog = "20192-web-programming")
public class Schedule extends BaseModel {
    
    @Column(name = "monday")
    private Integer monday;
    
    @Column(name = "tuesday")
    private Integer tuesday;
    
    @Column(name = "wednesday")
    private Integer wednesday;
    
    @Column(name = "thursday")
    private Integer thursday;
    
    @Column(name = "friday")
    private Integer friday;
    
    @Column(name = "saturday")
    private Integer saturday;
    
    @Column(name = "sunday")
    private Integer sunday;
    
	@Access(AccessType.FIELD)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;
}
