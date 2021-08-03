package com.savis.categories.common.security;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.savis.categories.common.dto.ResponseDataDTO;
import com.savis.categories.common.dto.UserDataDTO;

@Component
public class AuthFailureHandler extends SimpleUrlAuthenticationFailureHandler {

	private final ObjectMapper mapper;

	AuthFailureHandler(
			@Qualifier("mappingJackson2HttpMessageConverter") MappingJackson2HttpMessageConverter messageConverter) {
		this.mapper = messageConverter.getObjectMapper();
	}

	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {
		// TODO Auto-generated method stub
		ResponseDataDTO<UserDataDTO> responseData = new ResponseDataDTO<>();
		try {
			responseData.setStatusCode(HttpStatus.SC_UNAUTHORIZED);
			responseData.setMessage("Username or password is incorrect.");
			responseData.setData(null);
			PrintWriter writer = response.getWriter();
			mapper.writeValue(writer, responseData);
			writer.flush();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
