package com.savis.categories.common.base.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.savis.categories.common.base.domain.BaseModel;

@NoRepositoryBean
public interface BaseRepository<E extends BaseModel> extends JpaRepository<E, Long> {
	
}
