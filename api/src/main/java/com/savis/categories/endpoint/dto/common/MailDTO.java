package com.savis.categories.endpoint.dto.common;

public class MailDTO {
	private String code;
	private String email;
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public MailDTO(String code, String email) {
		super();
		this.code = code;
		this.email = email;
	}
	public MailDTO() {
		super();
	}
	
	
}
