package com.savis.categories.common.base.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.savis.categories.common.base.domain.BaseModel;
import com.savis.categories.common.dto.ServiceResponse;

public interface BaseService<E extends BaseModel> {

	ServiceResponse<E> save(E entity);

	ServiceResponse<List<E>> saveAll(List<E> entities);

	ServiceResponse<E> update(E entity);

	ServiceResponse<E> get(Long id);

	ServiceResponse<Page<E>> getPaging(Pageable pageable);
    
	ServiceResponse<List<E>> getAll();

	ServiceResponse<Boolean> deleteById(Long id);

	ServiceResponse<Boolean> deleteAll();
}
