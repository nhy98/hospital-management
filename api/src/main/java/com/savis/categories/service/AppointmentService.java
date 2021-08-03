package com.savis.categories.service;

import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.savis.categories.common.base.service.impl.BaseServiceImpl;
import com.savis.categories.dao.model.Account;
import com.savis.categories.dao.model.Appointment;
import com.savis.categories.dao.model.Hospital;
import com.savis.categories.dao.repository.AccountRepository;
import com.savis.categories.dao.repository.AppointmentRepository;
import com.savis.categories.endpoint.dto.common.AppointmentDTO;
import com.savis.categories.endpoint.dto.common.MailDTO;

@Service
public class AppointmentService extends BaseServiceImpl<Appointment, AppointmentRepository> {

	@Autowired
	AppointmentRepository AppointmentRepository;

	@Autowired
	AccountRepository AccountRepository;
	
	private Logger log = Logger.getLogger(AppointmentService.class);

	public AppointmentService(AppointmentRepository repository) {
		super(repository);
	}
	
	public AppointmentDTO getByParent(Long parentId) {
		try {

			Account parent = null;
			AppointmentDTO AppointmentDTO = null;
			
			parent = AccountRepository.getOne(parentId);
			if(parent != null) {
				AppointmentDTO = new AppointmentDTO(
						AppointmentRepository.findByAccountAndState(parent, 2), 
						AppointmentRepository.findByAccountAndState(parent, 1), 
						AppointmentRepository.findByAccountAndState(parent, 0));
			}
			return AppointmentDTO;
		} catch (Exception e) {
			log.error(e);
		}
		return null;
	}

	public void mail(MailDTO mailDTO) {
		try {
			Properties p = new Properties();
			p.put("mail.smtp.auth", "true");
			p.put("mail.smtp.starttls.enable", "true");
			p.put("mail.smtp.host", "smtp.gmail.com");
			p.put("mail.smtp.port", 587);

			String accountName = "madbranner@gmail.com";
			char[] accountPassword = "ssk53613532611p".toCharArray();
			String Password = new String(accountPassword);
			Session s = Session.getInstance(p, new javax.mail.Authenticator() {
				@Override
				protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
					return new javax.mail.PasswordAuthentication(accountName, Password);
				}
			});

			Message msg = new MimeMessage(s);
			msg.setFrom(new InternetAddress(accountName));
			msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(mailDTO.getEmail()));
			msg.setSubject("Hospital Appointment System");
			msg.setContent("Dear sir/madam,<br>You have made an appointment with our system <br> please use this code to access the medical record<br>Your code is " + mailDTO.getCode(), "text/html");

			Transport.send(msg);

			System.out.println("Sending Email Successfully");
		} catch (Exception e) {
			log.error(e);
		}
	}
}

