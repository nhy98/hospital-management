package com.savis.categories.dao.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.savis.categories.common.base.repository.BaseRepository;
import com.savis.categories.dao.model.Account;
import com.savis.categories.dao.model.Appointment;

@Repository
public interface AppointmentRepository extends BaseRepository<Appointment> {
	List<Appointment> findByAccount(Account account);
	
	List<Appointment> findByAccountAndState(Account account, Integer state);
	
}
