package com.savis.categories.endpoint.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.savis.categories.common.base.controller.impl.BaseControllerImpl;
import com.savis.categories.common.dto.ServiceResponse;
import com.savis.categories.common.exception.BaseException;
import com.savis.categories.dao.model.Review;
import com.savis.categories.service.ReviewService;

@RestController
@RequestMapping("api/v1/review")
public class ReviewResource extends BaseControllerImpl<Review, ReviewService> {
	@Autowired
	private ReviewService ReviewService;

	@Autowired
	protected ReviewResource(ReviewService service) {
		super(service);
	}
	
	@GetMapping("/account/{parentId}")
	ServiceResponse<List<Review>> getByParent(@PathVariable("parentId") Long parentId) {
		List<Review> children = null;
		try {
			children = ReviewService.getByParent(parentId);
		} catch (Exception e) {
			throw new BaseException(e.getMessage());
		}
		return new ServiceResponse<List<Review>>(1, children);
	};
}

