package com.savis.categories.endpoint.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.savis.categories.common.base.controller.impl.BaseControllerImpl;
import com.savis.categories.common.dto.ServiceResponse;
import com.savis.categories.common.exception.BaseException;
import com.savis.categories.dao.model.Account;
import com.savis.categories.dao.model.Appointment;
import com.savis.categories.service.AccountService;

@RestController
@RequestMapping("api/v1/account")
public class AccountResource extends BaseControllerImpl<Account, AccountService> {
	@Autowired
	private AccountService AccountService;

	@Autowired
	protected AccountResource(AccountService service) {
		super(service);
	}

	@GetMapping("/currentuser")
	ServiceResponse<Account> getCurrentUser() {
		Account Account = null;
		try {
			Account = AccountService.getCurrentUser();
		} catch (Exception e) {
			throw new BaseException(e.getMessage());
		}
		return new ServiceResponse<Account>(1, Account);
	};
	
	@PostMapping("/register")
	ServiceResponse<Object> register(@RequestBody Account account) {
		try {
			Object result = AccountService.register(account);
			return new ServiceResponse<Object>(1, result);
		} catch (Exception e) {
			// TODO: handle exception
			return new ServiceResponse<Object>(0, e.getMessage());
		}
		
	};
	
	@GetMapping("/hospital/{parentId}")
	ServiceResponse<List<Account>> getByParent(@PathVariable("parentId") Long parentId) {
		List<Account> accounts = null;
		try {
			accounts = AccountService.getByParent(parentId);
		} catch (Exception e) {
			throw new BaseException(e.getMessage());
		}
		return new ServiceResponse<List<Account>>(1, accounts);
	};
	
	@GetMapping("/user-type/{userType}")
	ServiceResponse<List<Account>> getByParent(@PathVariable("userType") Integer userType) {
		List<Account> accounts = null;
		try {
			accounts = AccountService.getByUserType(userType);
		} catch (Exception e) {
			throw new BaseException(e.getMessage());
		}
		return new ServiceResponse<List<Account>>(1, accounts);
	};
	
	@GetMapping("/name/{name}")
	ServiceResponse<List<Account>> getByName(@PathVariable("name") String name) {
		List<Account> children = null;
		try {
			children = AccountService.getByName(name);
		} catch (Exception e) {
			throw new BaseException(e.getMessage());
		}
		return new ServiceResponse<List<Account>>(1, children);
	};
	
	@GetMapping("/search/{hospitalId}/{name}")
	ServiceResponse<List<Account>> getByNameandHos(@PathVariable("hospitalId") Long hospitalId,
			@PathVariable("name") String name) {
		List<Account> children = null;
		try {
			children = AccountService.getByHospitalAndName(hospitalId, name);
		} catch (Exception e) {
			throw new BaseException(e.getMessage());
		}
		return new ServiceResponse<List<Account>>(1, children);
	};
}

