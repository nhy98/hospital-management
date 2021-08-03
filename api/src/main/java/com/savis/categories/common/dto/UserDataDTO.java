package com.savis.categories.common.dto;

public class UserDataDTO {

	private UserDTO mbsUser;
	/**
	 * @return the mbsUser
	 */
	public UserDTO getMbsUser() {
		return mbsUser;
	}

	/**
	 * @param mbsUser
	 *            the mbsUser to set
	 */
	public void setMbsUser(UserDTO mbsUser) {
		this.mbsUser = mbsUser;
	}

	/**
	 * @return the mbsNavigationRoles
	 */

	public UserDataDTO(UserDTO mbsUser) {
		super();
		this.mbsUser = mbsUser;
	}

	public UserDataDTO() {
		super();
	}

}
