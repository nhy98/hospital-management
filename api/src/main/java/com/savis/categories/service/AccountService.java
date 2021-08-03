package com.savis.categories.service;

import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.savis.categories.common.base.service.impl.BaseServiceImpl;
import com.savis.categories.dao.model.Account;
import com.savis.categories.dao.model.Hospital;
import com.savis.categories.dao.repository.AccountRepository;
import com.savis.categories.dao.repository.HospitalRepository;

@Service
public class AccountService extends BaseServiceImpl<Account, AccountRepository> {

	@Autowired
	AccountRepository AccountRepository;

	@Autowired
	HospitalRepository HospitalRepository;

	private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	@Autowired
	private Environment env;

	private Logger log = Logger.getLogger(AccountService.class);

	public AccountService(AccountRepository repository) {
		super(repository);
	}

	public Account getCurrentUser() {
		try {

			String currentUserName = "";
			Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
			if (!(authentication instanceof AnonymousAuthenticationToken)) {
				currentUserName = authentication.getName();
			}
			// set version
			Account Account = null;
			Account = AccountRepository.findByUsername(currentUserName);
			return Account;
		} catch (Exception e) {
			log.error(e);
		}
		return null;
	}

	public Object register(Account account) throws Exception {

		try {
			/**
			 * Create user db
			 */
			return AccountRepository.save(new Account(account.getAddress(), account.getAge(), account.getMobile(),
					account.getEmail(), account.getFullname(), account.getInformation(), account.getUsername(),
					passwordEncoder.encode(account.getPassword()), account.getUserType(), account.getWorkingPosition(),
					account.getSpecialization(), account.getAvatar(), account.getHospital()));
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return e.getMessage();
		}

	}

	public List<Account> getByParent(Long parentId) {
		try {

			Hospital hospital = null;
			List<Account> accounts = null;

			hospital = HospitalRepository.getOne(parentId);
			if (hospital != null) {
				accounts = AccountRepository.findByHospital(hospital);
			}
			return accounts;
		} catch (Exception e) {
			log.error(e);
		}
		return null;
	}

	public List<Account> getByUserType(Integer userType) {
		try {
			List<Account> accounts = null;
			accounts = AccountRepository.findByUserType(userType);
			return accounts;
		} catch (Exception e) {
			log.error(e);
		}
		return null;
	}

	public List<Account> getByName(String name) {
		try {
			return AccountRepository.findByUserTypeAndFullnameContaining(2, name);
		} catch (Exception e) {
			log.error(e);
		}
		return null;
	}
	
	public List<Account> getByHospitalAndName(Long hospitalId, String name) {
		try {
			Hospital hospital = HospitalRepository.findById(hospitalId).get();
			return AccountRepository.findByHospitalAndFullnameContaining(hospital, name);
		} catch (Exception e) {
			log.error(e);
		}
		return null;
	}
}
