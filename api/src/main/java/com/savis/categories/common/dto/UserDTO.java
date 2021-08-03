package com.savis.categories.common.dto;

import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.NotEmpty;

import com.savis.categories.common.constants.CommonConstants;

public class UserDTO {
	private Integer userId;
	private Integer age;
	private String address;
	private String username;
	private String password;
	private String fullname;
	private String email;
	private String information;
	private String mobile;
	private String avatar;
	private Integer role;
	
	public UserDTO(Integer userId, Integer age, String address, String username, String password, String fullname, String email,
			String information, String mobile, String avatar, Integer role) {
		super();
		this.userId = userId;
		this.age = age;
		this.address = address;
		this.username = username;
		this.password = password;
		this.fullname = fullname;
		this.email = email;
		this.information = information;
		this.mobile = mobile;
		this.avatar = avatar;
		this.role = role;
	}


	public UserDTO() {
		super();
	}

	public Integer getUserId() {
		return userId;
	}


	public void setUserId(Integer userId) {
		this.userId = userId;
	}


	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	@Pattern(regexp = CommonConstants.EMAIL_PATTERN, message = "The value is invalid")
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getRole() {
		return role;
	}

	public void setRole(Integer role) {
		this.role = role;
	}

	@NotEmpty
	@Pattern(regexp = CommonConstants.USERNAME_PATTERN, message = "The value is invalid")
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}


	public Integer getAge() {
		return age;
	}


	public void setAge(Integer age) {
		this.age = age;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getInformation() {
		return information;
	}


	public void setInformation(String information) {
		this.information = information;
	}

	
}
