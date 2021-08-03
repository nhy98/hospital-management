package com.savis.categories.dao.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.savis.categories.common.base.repository.BaseRepository;
import com.savis.categories.dao.model.Hospital;

@Repository
public interface HospitalRepository extends BaseRepository<Hospital> {
	List<Hospital> findByHospitalNameContaining(String hospitalName);
}
