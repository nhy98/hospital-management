package com.savis.categories.service;

import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.savis.categories.common.base.service.impl.BaseServiceImpl;
import com.savis.categories.dao.model.Hospital;
import com.savis.categories.dao.repository.HospitalRepository;

@Service
public class HospitalService extends BaseServiceImpl<Hospital, HospitalRepository> {

	@Autowired
	HospitalRepository HospitalRepository;

	private Logger log = Logger.getLogger(HospitalService.class);

	public HospitalService(HospitalRepository repository) {
		super(repository);
	}

	public List<Hospital> getByName(String name) {
		try {
			return HospitalRepository.findByHospitalNameContaining(name);
		} catch (Exception e) {
			log.error(e);
		}
		return null;
	}
}
