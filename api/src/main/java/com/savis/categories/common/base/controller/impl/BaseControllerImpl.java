package com.savis.categories.common.base.controller.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.savis.categories.common.base.controller.BaseController;
import com.savis.categories.common.base.domain.BaseModel;
import com.savis.categories.common.base.service.BaseService;
import com.savis.categories.common.dto.ServiceResponse;

public abstract class BaseControllerImpl<E extends BaseModel, S extends BaseService<E>> implements BaseController<E> {

	private final S service;

    @Autowired
    protected BaseControllerImpl(S service) {
        this.service = service;
    }

    @Override
    public ServiceResponse<E> save(@RequestBody E entity) {
        return service.save(entity);
    }

    @Override
    public ServiceResponse<List<E>> saveAll(@RequestBody List<E> entities) {
        return service.saveAll(entities);
    }

    @Override
    public ServiceResponse<E> update(@RequestBody E entity) {
        return service.save(entity);
    }

    @Override
    public ServiceResponse<E> get(@PathVariable Long id) {
        return service.get(id);
    }
    
    @Override
    public ServiceResponse<Page<E>> getPaging(Pageable pageable) {
    	return service.getPaging(pageable);
    }

    @Override
    public ServiceResponse<List<E>> getAll() {
        return service.getAll();
    }

    @Override
    public ServiceResponse<Boolean> delete(@PathVariable Long id) {
        return service.deleteById(id);
    }

    @Override
    public ServiceResponse<Boolean> deleteAll() {
        return service.deleteAll();
    }
}
