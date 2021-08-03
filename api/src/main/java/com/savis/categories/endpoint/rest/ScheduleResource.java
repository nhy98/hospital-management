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
import com.savis.categories.dao.model.Schedule;
import com.savis.categories.endpoint.dto.common.ScheduleDTO;
import com.savis.categories.service.ScheduleService;

@RestController
@RequestMapping("api/v1/schedule")
public class ScheduleResource extends BaseControllerImpl<Schedule, ScheduleService> {
	@Autowired
	private ScheduleService ScheduleService;

	@Autowired
	protected ScheduleResource(ScheduleService service) {
		super(service);
	}
	
	@GetMapping("/account/{parentId}")
	ServiceResponse<ScheduleDTO> getByParent(@PathVariable("parentId") Long parentId) {
		ScheduleDTO children = null;
		try {
			children = ScheduleService.getByParent(parentId);
		} catch (Exception e) {
			throw new BaseException(e.getMessage());
		}
		return new ServiceResponse<ScheduleDTO>(1, children);
	};
}

