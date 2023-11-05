package com.sajjad.academicportalbackend.dao.config;

import com.sajjad.academicportalbackend.dao.super_classes.CrudDao;
import com.sajjad.academicportalbackend.model.config.StudentProfile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.sajjad.academicportalbackend.dao.super_classes.CrudDao;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;

@org.springframework.stereotype.Repository
public interface StudentProfileRepository extends JpaRepository<StudentProfile, Long>, CrudDao<StudentProfile, Long> {

    @Modifying
    @Query(value = "UPDATE StudentProfile e " +
            "SET e.active = false, e.modifiedBy = :modifiedBy, e.modifiedDate = :modifiedDate " +
            "where e.id = :id")
    int softDeleteById(@Param("id") Long id, @Param("modifiedBy") String modifiedBy, @Param("modifiedDate") LocalDateTime modifiedDate);

}