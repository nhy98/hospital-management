package com.savis.categories.common.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LogDataDTO {
	private int idAmLog;
	private Integer apiVersionId;
	private Integer applicationId;
	private String dataInputApi;
	private String dataInputEndpoint;
	private String dataOutputApi;
	private String dataOutputEndpoint;
	private LogDataCodeDTO amLogDataCode;
	private String errorDetail;
	private String ipClient;
	private Integer timeBackendLatency;
	private Date timeOtherLatency;
	private Date timeRequest;
	private Integer timeRequestMediationLatency;
	private Date timeResponese;
	private Integer timeResponeseMediation;
	private Integer timeSecurityLatency;
	private Integer timeThrottlingLatency;
	private Date startDate;
	private Date endDate;
}
