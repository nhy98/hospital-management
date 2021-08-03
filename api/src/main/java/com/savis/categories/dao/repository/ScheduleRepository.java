package com.savis.categories.dao.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.savis.categories.common.base.repository.BaseRepository;
import com.savis.categories.dao.model.Account;
import com.savis.categories.dao.model.Schedule;

@Repository
public interface ScheduleRepository extends BaseRepository<Schedule> {
	List<Schedule> findByAccount(Account account);
}
