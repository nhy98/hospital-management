package com.savis.categories.endpoint.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.savis.categories.common.base.controller.impl.BaseControllerImpl;
import com.savis.categories.common.dto.ServiceResponse;
import com.savis.categories.common.exception.BaseException;
import com.savis.categories.dao.model.Hospital;
import com.savis.categories.service.HospitalService;

@RestController
@RequestMapping("api/v1/hospital")
public class HospitalResource extends BaseControllerImpl<Hospital, HospitalService> {
	@Autowired
	private HospitalService HospitalService;

	@Autowired
	protected HospitalResource(HospitalService service) {
		super(service);
	}
	
	@GetMapping("/name/{name}")
	ServiceResponse<List<Hospital>> getByName(@PathVariable("name") String name) {
		List<Hospital> children = null;
		try {
			children = HospitalService.getByName(name);
		} catch (Exception e) {
			throw new BaseException(e.getMessage());
		}
		return new ServiceResponse<List<Hospital>>(1, children);
	};
}

