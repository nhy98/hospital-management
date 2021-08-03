package com.savis.categories.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LogDataCodeDTO {
	private int amLogDataCodeId;
	private String source;
	private String code;
	private String condition;
	private String reason;
	private String message;
	private String scope;
}
