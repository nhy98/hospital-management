package com.savis.categories.endpoint.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.savis.categories.common.base.controller.impl.BaseControllerImpl;
import com.savis.categories.common.dto.ServiceResponse;
import com.savis.categories.common.exception.BaseException;
import com.savis.categories.dao.model.Appointment;
import com.savis.categories.endpoint.dto.common.AppointmentDTO;
import com.savis.categories.endpoint.dto.common.MailDTO;
import com.savis.categories.service.AppointmentService;

@RestController
@RequestMapping("api/v1/appointment")
public class AppointmentResource extends BaseControllerImpl<Appointment, AppointmentService> {
	@Autowired
	private AppointmentService AppointmentService;

	@Autowired
	protected AppointmentResource(AppointmentService service) {
		super(service);
	}
	
	@GetMapping("/account/{parentId}")
	ServiceResponse<AppointmentDTO> getByParent(@PathVariable("parentId") Long parentId) {
		AppointmentDTO children = null;
		try {
			children = AppointmentService.getByParent(parentId);
		} catch (Exception e) {
			throw new BaseException(e.getMessage());
		}
		return new ServiceResponse<AppointmentDTO>(1, children);
	};
	
	@PostMapping("/mail")
	ServiceResponse<AppointmentDTO> mail(@RequestBody MailDTO mailDTO) {
		AppointmentDTO children = null;
		try {
			AppointmentService.mail(mailDTO);
		} catch (Exception e) {
			throw new BaseException(e.getMessage());
		}
		return new ServiceResponse<AppointmentDTO>(1, null);
	};
	
}

