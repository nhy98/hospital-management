package com.savis.categories.endpoint.dto.common;

import java.util.List;

public class ScheduleDTO {
	private List<ScheduleWeekDayDTO> weekdayDTOs;
	private Long id;
	public List<ScheduleWeekDayDTO> getWeekdayDTOs() {
		return weekdayDTOs;
	}
	public void setWeekdayDTOs(List<ScheduleWeekDayDTO> weekdayDTOs) {
		this.weekdayDTOs = weekdayDTOs;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public ScheduleDTO() {
		super();
	}
	public ScheduleDTO(List<ScheduleWeekDayDTO> weekdayDTOs, Long id) {
		super();
		this.weekdayDTOs = weekdayDTOs;
		this.id = id;
	}
	
	
}
