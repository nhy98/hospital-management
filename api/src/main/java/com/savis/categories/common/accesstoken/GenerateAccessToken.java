package com.savis.categories.common.accesstoken;

import java.security.Key;
import java.util.Date;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class GenerateAccessToken {
	public static String genatateAccessToken(String clientId, String clientSecret, Long expiration, String scope, String userName,String keyType) {
		SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256; 
		String asscessToken ="";
		try {
			long nowMillis = System.currentTimeMillis();
			Date now = new Date(nowMillis);
			//We will sign our JWT with our ApiKey secret
			byte[] signingKeyBte = DatatypeConverter.parseBase64Binary(clientSecret);
			Key signingKey = new SecretKeySpec(signingKeyBte, signatureAlgorithm.getJcaName());
			Date creationDate = new Date(nowMillis);
			// set giá trị cho claims
			Claims claims = Jwts.claims()
					.setAudience(clientId)
					.setSubject(userName)
					.setExpiration(now);
	        claims.put("scope", scope);
	        claims.put("key_type", keyType);
	        claims.put("creation_date", creationDate);
			JwtBuilder builder = Jwts.builder()
					.setClaims(claims)
					.signWith(signatureAlgorithm, signingKey);
			//if it has been specified, let's add the expiration
			if (expiration >= 0) {
				long expMillis = nowMillis + expiration;
				Date exp = new Date(expMillis);
				builder.setExpiration(exp);
			}
			asscessToken =  builder.compact();
			
//			Claims claimtest = Jwts.parser()         
//				       .setSigningKey(DatatypeConverter.parseBase64Binary(clientSecret))
//				       .parseClaimsJws(asscessToken).getBody();
//				    System.out.println("ID: " + claimtest.getAudience());
//				    System.out.println("Subject: " + claimtest.getSubject());
//				    System.out.println("Expiration: " + claimtest.getExpiration());
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		return asscessToken;
	}

}
