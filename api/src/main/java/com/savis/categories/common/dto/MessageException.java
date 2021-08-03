package com.savis.categories.common.dto;

import java.util.Date;

public class MessageException {
	private Date timestamp = new Date();
	private int status;
	private String error;
	private String exception;
	private String message;
	private String path;

	public MessageException() {
		super();
	}

	public MessageException(int status, String error, String exception, String message, String path) {
		super();
		this.status = status;
		this.error = error;
		this.exception = exception;
		this.message = message;
		this.path = path;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public String getException() {
		return exception;
	}

	public void setException(String exception) {
		this.exception = exception;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

}
