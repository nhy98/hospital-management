package com.savis.categories.dao.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.savis.categories.common.base.repository.BaseRepository;
import com.savis.categories.dao.model.Appointment;
import com.savis.categories.dao.model.MedicalRecord;

@Repository
public interface MedicalRecordRepository extends BaseRepository<MedicalRecord> {
	List<MedicalRecord> findByCode(String code);
}
