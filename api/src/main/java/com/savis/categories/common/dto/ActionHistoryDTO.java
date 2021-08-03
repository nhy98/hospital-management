package com.savis.categories.common.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ActionHistoryDTO {
	private int actionHistoryId;
	private String userName;
	private String action;
	private String module;
	private String detailAction;
	private Date dateAction;
	private Date startDate;
	private Date endDate;
}
