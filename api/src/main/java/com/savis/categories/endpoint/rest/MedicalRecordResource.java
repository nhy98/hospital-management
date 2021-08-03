package com.savis.categories.endpoint.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.savis.categories.common.base.controller.impl.BaseControllerImpl;
import com.savis.categories.common.dto.ServiceResponse;
import com.savis.categories.common.exception.BaseException;
import com.savis.categories.dao.model.Appointment;
import com.savis.categories.dao.model.MedicalRecord;
import com.savis.categories.service.MedicalRecordService;

@RestController
@RequestMapping("api/v1/medical-record")
public class MedicalRecordResource extends BaseControllerImpl<MedicalRecord, MedicalRecordService> {
	@Autowired
	private MedicalRecordService MedicalRecordService;

	@Autowired
	protected MedicalRecordResource(MedicalRecordService service) {
		super(service);
	}
	
	@GetMapping("/code/{code}")
	ServiceResponse<MedicalRecord> getByCode(@PathVariable("code") String code) {
		MedicalRecord children = null;
		try {
			children = MedicalRecordService.getByCode(code);
		} catch (Exception e) {
			throw new BaseException(e.getMessage());
		}
		return new ServiceResponse<MedicalRecord>(1, children);
	};
}

