package com.sajjad.academicportalbackend.dao.super_classes;

import com.sajjad.academicportalbackend.model.config.StudentProfile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CrudDao<T, I> {
    Page<T> findByActive(boolean active, Pageable pageable);
}
