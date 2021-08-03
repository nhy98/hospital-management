package com.savis.categories.common.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.savis.categories.common.constants.CommonConstants;
import com.savis.categories.common.dto.UserTokenState;

import java.util.Date;

@Component
public class TokenHelper {

	@Value("${app.name}")
	private String APP_NAME;

	@Value("${jwt.secret}")
	private String SECRET;

	@Value("${jwt.expires_in}")
	private int EXPIRES_IN;

	private SignatureAlgorithm SIGNATURE_ALGORITHM = SignatureAlgorithm.HS512;

	public String getUsernameFromToken(String token) {
		String username = "";
		try {
			final Claims claims = this.getClaimsFromToken(token);

			Date validTo = claims.getExpiration();
			Date requestTime = new Date();

			if (validTo.after(requestTime)) {
				username = claims.getSubject();
			} else {
				username = CommonConstants.ERR_TOKEN_EXPIRED;
			}

		} catch (Exception e) {
			username = null;
		}
		return username;
	}
	
	public UserTokenState getTokenExpire(String token){
		UserTokenState userTokenState;
		try {
			final Claims claims = this.getClaimsFromToken(token);
			long expireTime;

			Date validTo = claims.getExpiration();
			Date requestTime = new Date();
			if(validTo.getTime()>requestTime.getTime()){
				expireTime = (validTo.getTime() - requestTime.getTime())/1000;
			} else{
				expireTime = 0;
			}
			userTokenState = new UserTokenState(token, expireTime);
		} catch (Exception e) {
			userTokenState = new UserTokenState("",0);
		}
		return userTokenState;
	}

	public String generateToken(String username) {
		System.out.println(generateExpirationDate());
		String jws = Jwts.builder().setIssuer(APP_NAME).setSubject(username).setIssuedAt(generateCurrentDate())
				.setExpiration(generateExpirationDate()).signWith(SIGNATURE_ALGORITHM, SECRET).compact();
		return jws;
	}

	public Claims getClaimsFromToken(String token) {
		Claims claims;
		try {
			claims = Jwts.parser().setSigningKey(this.SECRET).parseClaimsJws(token).getBody();
		} catch (Exception e) {
			claims = null;
		}
		return claims;
	}

	private long getCurrentTimeMillis() {
		return new DateTime().getMillis();
	}

	private Date generateCurrentDate() {
		return new Date(getCurrentTimeMillis());
	}

	private Date generateExpirationDate() {
		return new Date(getCurrentTimeMillis() + this.EXPIRES_IN * 1000);
	}
}
