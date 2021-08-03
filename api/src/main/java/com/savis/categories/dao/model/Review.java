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
@Table(name = "REVIEW", schema = "public", catalog = "20192-web-programming")
public class Review extends BaseModel {

	@Column(name = "contents")
    private String contents;

    @Column(name = "tags")
    private String tags;

    @Access(AccessType.FIELD)
    @Column(name = "created_date")
    private String createdDate;
    
    @Column(name = "rate")
    private Integer rate;
    
    @Column(name = "username")
    private String username;
    
	@Access(AccessType.FIELD)
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;
}
