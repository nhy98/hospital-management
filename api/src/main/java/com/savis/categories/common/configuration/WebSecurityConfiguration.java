package com.savis.categories.common.configuration;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.savis.categories.common.security.AuthFailureHandler;
import com.savis.categories.common.security.AuthSuccessHandler;
import com.savis.categories.common.security.MyLogoutSuccessHandler;
import com.savis.categories.common.security.TokenAuthenticationFilter;

@Component
@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
	@Autowired
    private UserDetailsService userDetailsService;	

	@Autowired
	private AuthSuccessHandler authSuccessHandler;

	@Autowired
	private AuthFailureHandler authFailureHandler;

	@Autowired
	private MyLogoutSuccessHandler logoutSuccessHandler;

	@Value("${web.address}")
	private String webAddress;

	@Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public TokenAuthenticationFilter jwtAuthenticationTokenFilter() throws Exception {
        return new TokenAuthenticationFilter();
    }

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.addFilterBefore(jwtAuthenticationTokenFilter(), BasicAuthenticationFilter.class)
        .authorizeRequests()
        
        .antMatchers("/api/v1/auth/login").permitAll()
        .antMatchers("/api/v1/auth/logout").permitAll()
        .antMatchers("/api/v1/auth/getTokenExpire").permitAll()
        .antMatchers(HttpMethod.GET,"/api/v1/account/**").permitAll()
        .antMatchers(HttpMethod.POST,"/api/v1/account/**").permitAll()
        .antMatchers(HttpMethod.PUT,"/api/v1/account/**").permitAll()
        .antMatchers(HttpMethod.GET, "/api/v1/**").permitAll()
        .antMatchers(HttpMethod.POST, "/api/v1/**")
        .hasAnyAuthority("ROLE_MEMBER","ROLE_ADMIN")
        .antMatchers(HttpMethod.PUT, "/api/v1/**")
        .hasAnyAuthority("ROLE_MEMBER","ROLE_ADMIN")
        .antMatchers(HttpMethod.DELETE, "/api/v1/**")
        .hasAnyAuthority("ROLE_ADMIN")
        .anyRequest().authenticated();

		http.formLogin()
					.loginProcessingUrl("/api/v1/auth/login")
					.usernameParameter("username")
					.passwordParameter("password")
					.successHandler(authSuccessHandler)
					.failureHandler(authFailureHandler)
					.and()
		            .logout().permitAll()
					.logoutRequestMatcher(new AntPathRequestMatcher("/api/v1/auth/logout"))
					.logoutSuccessHandler(logoutSuccessHandler);
		
//		http.sessionManagement().maximumSessions(1);
		
		http.csrf().disable();
//        http.headers().frameOptions().disable();
//        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.ALWAYS);
		http.cors().and();
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList(webAddress));
		configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
		configuration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin",
				"Access-Control-Allow-Headers", "Content-Type", "Authorization", "X-Requested-With"));
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	/* To allow Pre-flight [OPTIONS] request from browser */
	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers(HttpMethod.OPTIONS, "/**");
	}

}
