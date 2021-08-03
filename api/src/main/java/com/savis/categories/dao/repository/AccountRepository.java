package com.savis.categories.dao.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.savis.categories.common.base.repository.BaseRepository;
import com.savis.categories.dao.model.Account;
import com.savis.categories.dao.model.Hospital;

@Repository
public interface AccountRepository extends BaseRepository<Account> {
	Account findByUsername(String username);
	
	List<Account> findByHospital(Hospital hospital);
	
	List<Account> findByUserType(Integer userType);
	
	List<Account> findByUserTypeAndFullnameContaining(Integer userType, String fullname);
	
	List<Account> findByHospitalAndFullnameContaining(Hospital hospital, String fullname);
	
}
