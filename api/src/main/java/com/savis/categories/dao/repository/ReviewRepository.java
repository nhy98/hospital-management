package com.savis.categories.dao.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.savis.categories.common.base.repository.BaseRepository;
import com.savis.categories.dao.model.Account;
import com.savis.categories.dao.model.Review;

@Repository
public interface ReviewRepository extends BaseRepository<Review> {
	List<Review> findByAccount(Account account);
}
