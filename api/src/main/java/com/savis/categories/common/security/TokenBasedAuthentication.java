package com.savis.categories.common.security;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;


public class TokenBasedAuthentication extends AbstractAuthenticationToken {

    private String token;
    private final UserDetails principle;
    private boolean authenticated = false;

    public TokenBasedAuthentication( UserDetails principle ) {
        super( principle.getAuthorities() );
        this.principle = principle;
    }
    
    public TokenBasedAuthentication( UserDetails principle, boolean authenticated ) {
        super( principle.getAuthorities() );
        this.principle = principle;
        this.authenticated = authenticated;
    }


    public String getToken() {
        return token;
    }

    public void setToken( String token ) {
        this.token = token;
    }

    public void setAuthenticated(boolean authenticated) {
		this.authenticated = authenticated;
	}

	@Override
    public boolean isAuthenticated() {
        return authenticated;
    }

    @Override
    public Object getCredentials() {
        return token;
    }

    @Override
    public UserDetails getPrincipal() {
        return principle;
    }

}
