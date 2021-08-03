package com.savis.categories.common.base.controller;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.savis.categories.common.base.domain.BaseModel;
import com.savis.categories.common.dto.ServiceResponse;

public interface BaseController <E extends BaseModel> {

    @PostMapping
    ServiceResponse<E> save(@RequestBody E entity);

    @PostMapping("/all")
    ServiceResponse<List<E>> saveAll(@RequestBody List<E> entities);

    @PutMapping
    ServiceResponse<E> update(@RequestBody E entity);

    @GetMapping("/{id}")
    ServiceResponse<E> get(@PathVariable("id") Long id);

    @GetMapping
    ServiceResponse<Page<E>> getPaging(Pageable pageable);
    
    @GetMapping("/all")
    ServiceResponse<List<E>> getAll();

    @DeleteMapping("/{id}")
    ServiceResponse<Boolean> delete(@PathVariable("id") Long id);

    @DeleteMapping("/all")
    ServiceResponse<Boolean> deleteAll();
}