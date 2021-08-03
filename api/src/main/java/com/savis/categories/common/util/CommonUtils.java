package com.savis.categories.common.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;

/**
 * 
 * @author SonHD
 * @created 16/09/2017
 * 
 * @modified SonHD
 * @modifier 21/09/2017
 * 
 */
public class CommonUtils {
	
	public static String convertFromArrayToString(int[] src) {
		if (src == null || src.length == 0) {
			return "";
		}
		String desc = "" + src[0];
		for (int i = 1; i < src.length; i++) {
			desc = desc + ", " + src[i];
		}
		return desc;
	}
	
	public static Authentication getAuthorization() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return authentication;
	}
	
	public static String getCurrentUserName(){
		try {
			Object principal = getAuthorization().getPrincipal();
			if (principal instanceof User) {
				User user = (User) getAuthorization().getPrincipal();
				return user.getUsername();
			} else {
				return principal.toString();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}
	
	public static boolean isNullOrEmpty(String str){
		return ((str == null) || (str.equals("")));
	}
}
