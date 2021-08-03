package com.savis.categories.service;

import java.util.ArrayList;
import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.savis.categories.common.base.service.impl.BaseServiceImpl;
import com.savis.categories.dao.model.Account;
import com.savis.categories.dao.model.Schedule;
import com.savis.categories.dao.repository.AccountRepository;
import com.savis.categories.dao.repository.ScheduleRepository;
import com.savis.categories.endpoint.dto.common.ScheduleDTO;
import com.savis.categories.endpoint.dto.common.ScheduleWeekDayDTO;

@Service
public class ScheduleService extends BaseServiceImpl<Schedule, ScheduleRepository> {

	@Autowired
	ScheduleRepository ScheduleRepository;

	@Autowired
	AccountRepository AccountRepository;
	
	private Logger log = Logger.getLogger(ScheduleService.class);

	public ScheduleService(ScheduleRepository repository) {
		super(repository);
	}
	
	public ScheduleDTO getByParent(Long parentId) {
		try {
			Account parent = null;
			List<Schedule> children = null;
			List<ScheduleWeekDayDTO> weekdayDTOs = new ArrayList<>();
			ScheduleDTO scheduleDTO = null;
			Schedule schedule = null;
			parent = AccountRepository.getOne(parentId);
			if(parent != null) {
				children = ScheduleRepository.findByAccount(parent);
			}
			if(children.size() > 0) {
				schedule = children.get(0);
				weekdayDTOs.add(new ScheduleWeekDayDTO("Monday", schedule.getMonday()));
				weekdayDTOs.add(new ScheduleWeekDayDTO("Tuesday", schedule.getTuesday()));
				weekdayDTOs.add(new ScheduleWeekDayDTO("Wednesday", schedule.getWednesday()));
				weekdayDTOs.add(new ScheduleWeekDayDTO("Thursday", schedule.getThursday()));
				weekdayDTOs.add(new ScheduleWeekDayDTO("Friday", schedule.getFriday()));
				weekdayDTOs.add(new ScheduleWeekDayDTO("Saturday", schedule.getSaturday()));
				weekdayDTOs.add(new ScheduleWeekDayDTO("Sunday", schedule.getSunday()));
				scheduleDTO = new ScheduleDTO(weekdayDTOs, schedule.getId());
			}
			return scheduleDTO;
		} catch (Exception e) {
			log.error(e);
		}
		return null;
	}
}

