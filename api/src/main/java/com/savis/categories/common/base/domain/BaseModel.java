package com.savis.categories.common.base.domain;

import java.io.Serializable;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.TableGenerator;

@MappedSuperclass
public abstract class BaseModel implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;

	@Id
	@TableGenerator(name = "gen_id", table = "hibernate_gen_id", pkColumnName = "gen_name", valueColumnName = "gen_value", allocationSize = 1) // generate
	@GeneratedValue(strategy = GenerationType.TABLE, generator = "gen_id")
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}
