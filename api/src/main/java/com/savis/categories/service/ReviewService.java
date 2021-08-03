package com.savis.categories.service;

import java.util.List;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.savis.categories.common.base.service.impl.BaseServiceImpl;
import com.savis.categories.dao.model.Account;
import com.savis.categories.dao.model.Appointment;
import com.savis.categories.dao.model.Review;
import com.savis.categories.dao.repository.AccountRepository;
import com.savis.categories.dao.repository.ReviewRepository;

@Service
public class ReviewService extends BaseServiceImpl<Review, ReviewRepository> {

	@Autowired
	ReviewRepository ReviewRepository;

	@Autowired
	AccountRepository AccountRepository;
	
	private Logger log = Logger.getLogger(ReviewService.class);

	public ReviewService(ReviewRepository repository) {
		super(repository);
	}
	
	public List<Review> getByParent(Long parentId) {
		try {

			Account parent = null;
			List<Review> children = null;
			
			parent = AccountRepository.getOne(parentId);
			if(parent != null) {
				children = ReviewRepository.findByAccount(parent);
			}
			return children;
		} catch (Exception e) {
			log.error(e);
		}
		return null;
	}
}

