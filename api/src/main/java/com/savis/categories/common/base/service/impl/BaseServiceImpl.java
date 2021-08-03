package com.savis.categories.common.base.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.savis.categories.common.base.domain.BaseModel;
import com.savis.categories.common.base.repository.BaseRepository;
import com.savis.categories.common.base.service.BaseService;
import com.savis.categories.common.dto.ServiceResponse;

public abstract class BaseServiceImpl<E extends BaseModel, R extends BaseRepository<E>> implements BaseService<E> {

	private final R repository;

	private static final Logger log = LoggerFactory.getLogger(BaseServiceImpl.class);

	@Autowired
	public BaseServiceImpl(R repository) {
		this.repository = repository;
	}

	@Override
	public ServiceResponse<E> save(E entity) {
		try {
			E obj = repository.save(entity);
			log.info("Saved " + obj.getClass().getName() + ". ID = " + obj.getId());
			return new ServiceResponse<E>(1, obj);
		} catch (Exception e) {
			// TODO: handle exception
			log.error(e.getMessage());
			return new ServiceResponse<E>(0, null);
		}

	}

	@Override
	public ServiceResponse<List<E>> saveAll(List<E> entities) {
		try {
			List<E> obj = repository.saveAll(entities);
			log.info("Saved list " + obj.getClass().getName());
			return new ServiceResponse<List<E>>(1, obj);
		} catch (Exception e) {
			// TODO: handle exception
			log.error(e.getMessage());
			return new ServiceResponse<List<E>>(0, null);
		}

	}

	@Override
	public ServiceResponse<E> update(E entity) {
		E obj = repository.save(entity);
		if (obj != null) {
			return new ServiceResponse<E>(1, obj);
		}
		return new ServiceResponse<E>(0, null);
	}

	@Override
	public ServiceResponse<E> get(Long id) {
		try {
			E obj = repository.findById(id).get();
			log.info("Fetch " + obj.getClass().getName() + " successfully with ID = " + obj.getId());
			return new ServiceResponse<E>(1, obj);
		} catch (Exception e) {
			// TODO: handle exception
			log.error(e.getMessage());
			return new ServiceResponse<E>(0, null);
		}
	}

	@Override
	public ServiceResponse<Page<E>> getPaging(Pageable pageable) {
		Page<E> obj = repository.findAll(pageable);
		if (obj != null) {
			return new ServiceResponse<Page<E>>(1, obj);
		}
		return new ServiceResponse<Page<E>>(0, null);
	}

	@Override
	public ServiceResponse<List<E>> getAll() {
		List<E> obj = repository.findAll();
		if (obj != null) {
			log.info("Fetch list successfully");
			return new ServiceResponse<List<E>>(1, obj);
		}
		log.error("Can not fetch list ");
		return new ServiceResponse<List<E>>(0, null);
	}

	@Override
	public ServiceResponse<Boolean> deleteById(Long id) {

		E obj = repository.findById(id).get();

		if (obj != null) {
			repository.delete(obj);
			log.info("Deleted " + obj.getClass().getName() + " with id = " + id);
			return new ServiceResponse<Boolean>(1, true);
		} else {
			log.error("Not found");
			return new ServiceResponse<Boolean>(0, false);
		}

	}

	@Override
	public ServiceResponse<Boolean> deleteAll() {
		try {
			repository.deleteAll();
			log.info("Delete all success");
			return new ServiceResponse<Boolean>(1, true);
		} catch (Exception e) {
			// TODO: handle exception
			log.error(e.getMessage());
			return new ServiceResponse<Boolean>(0, false);
		}

	}
}
