package com.savis.categories.common.security;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.savis.categories.common.dto.ResponseDataDTO;
import com.savis.categories.common.dto.UserDataDTO;
import com.savis.categories.dao.model.Account;
import com.savis.categories.service.AccountService;

@Component
public class AuthSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

	@Autowired
	private AccountService accountService;

	
	@Value("${jwt.expires_in}")
    private int EXPIRES_IN;

    @Autowired
    TokenHelper tokenHelper;

    @Autowired
    ObjectMapper objectMapper;
    
    private final ObjectMapper mapper;

	AuthSuccessHandler(
			@Qualifier("mappingJackson2HttpMessageConverter") MappingJackson2HttpMessageConverter messageConverter) {
		this.mapper = messageConverter.getObjectMapper();
	}

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		
		ResponseDataDTO<Account> responseData = new ResponseDataDTO<>();
		if (authentication != null && authentication.getDetails() != null) {
			try {
				clearAuthenticationAttributes(request);
		        User user = (User)authentication.getPrincipal();
		        String jwt = tokenHelper.generateToken( user.getUsername() );

				Account account = accountService.getCurrentUser();
				responseData.setStatusCode(HttpStatus.SC_OK);
				responseData.setMessage("OK");
				responseData.setAuthToken(jwt);
				responseData.setData(account);
				
				PrintWriter writer = response.getWriter();
				mapper.writeValue(writer, responseData);
				writer.flush();
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			responseData.setStatusCode(HttpStatus.SC_UNAUTHORIZED);
			responseData.setMessage("UNAUTHORIZED");
			responseData.setData(null);
		}
	}


}
