package com.savis.categories.endpoint.dto.common;

public class ScheduleWeekDayDTO {
	private String weekday;
	private Integer value;
	public String getWeekday() {
		return weekday;
	}
	public void setWeekday(String weekday) {
		this.weekday = weekday;
	}
	public Integer getValue() {
		return value;
	}
	public void setValue(Integer value) {
		this.value = value;
	}
	public ScheduleWeekDayDTO(String weekday, Integer value) {
		super();
		this.weekday = weekday;
		this.value = value;
	}
	public ScheduleWeekDayDTO() {
		super();
	}
}


