package com.savis.categories.common.dto;

import com.savis.categories.common.util.MessageType;

public class MessageErrorDTO {
	private String message;
	private MessageType type;

	public MessageErrorDTO() {
		super();
	}

	public MessageErrorDTO(MessageType type, String message) {
		super();
		this.message = message;
		this.type = type;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public MessageType getType() {
		return type;
	}

	public void setType(MessageType type) {
		this.type = type;
	}
}
