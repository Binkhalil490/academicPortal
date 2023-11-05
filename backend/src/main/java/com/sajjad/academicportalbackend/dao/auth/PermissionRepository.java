package com.sajjad.academicportalbackend.dao.auth;

import com.sajjad.academicportalbackend.model.auth.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import com.sajjad.academicportalbackend.dao.super_classes.CrudDao;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface PermissionRepository extends JpaRepository<Permission, Long>, CrudDao<Permission, Long> {

    @Modifying
    @Query(value = "UPDATE Permission e " +
            "SET e.active = false " +
            "where e.id = :id")
    int softDeleteById(@Param("id") Long id);

}