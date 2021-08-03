package com.savis.categories.service;

import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.savis.categories.common.base.service.impl.BaseServiceImpl;
import com.savis.categories.dao.model.MedicalRecord;
import com.savis.categories.dao.repository.MedicalRecordRepository;

@Service
public class MedicalRecordService extends BaseServiceImpl<MedicalRecord, MedicalRecordRepository> {

	@Autowired
	MedicalRecordRepository MedicalRecordRepository;

	private Logger log = Logger.getLogger(MedicalRecordService.class);

	public MedicalRecordService(MedicalRecordRepository repository) {
		super(repository);
	}
	
	public MedicalRecord getByCode(String code) {
		try {
			List<MedicalRecord> medicalRecords = MedicalRecordRepository.findByCode(code);
			if(medicalRecords.size() > 0) {
				return medicalRecords.get(0);
			}
		} catch (Exception e) {
			log.error(e);
		}
		return null;
	}
}

