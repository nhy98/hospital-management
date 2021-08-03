package com.savis.categories.common.accesstoken;

import java.math.BigInteger;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Date;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import org.apache.tomcat.util.codec.binary.Base64;

public class GenerateKeys {
	public static String KEY_ALGORITHM = "DSA";
	public static int NUM_BITS = 1024;
	
    public static String generateKeys() {	
    	String publicKeyStr = "";
    	try {
    	    KeyGenerator generator = KeyGenerator.getInstance("AES");
    	    generator.init(128);

    	    SecretKey key = generator.generateKey();
    	    publicKeyStr =  key.getEncoded().toString();
    	  } catch (NoSuchAlgorithmException ex) {
    	    ex.printStackTrace();
    	  }
        return publicKeyStr;
   }
    
   public static String generateClientId() {
	   String clientId = "";
	   try {
		   SecureRandom random = new SecureRandom();
		   String srtRadom = new BigInteger(100, random).toString(32);
		   long nowMillis = System.currentTimeMillis();
		   Date creationDate = new Date(nowMillis);
		   String keySource =  creationDate + srtRadom;
		   new Base64(true);
		byte [] tokenByte = Base64.encodeBase64(keySource.getBytes());
		   clientId = new String(tokenByte);
		} catch (Exception e) {
			// TODO: handle exception
		}
	   return clientId;
   }

}
