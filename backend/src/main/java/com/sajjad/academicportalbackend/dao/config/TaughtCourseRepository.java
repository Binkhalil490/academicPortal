package com.sajjad.academicportalbackend.dao.config;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sajjad.academicportalbackend.dao.super_classes.CrudDao;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;

@org.springframework.stereotype.Repository
public interface TaughtCourseRepository extends JpaRepository<TaughtCourse, Long>, CrudDao<TaughtCourse, Long> {

    @Modifying
    @Query(value = "UPDATE TaughtCourse e " +
            "SET e.active = false, e.modifiedBy = :modifiedBy, e.modifiedDate = :modifiedDate " +
            "where e.id = :id")
    int softDeleteById(@Param("id") Long id, @Param("modifiedBy") String modifiedBy, @Param("modifiedDate") LocalDateTime modifiedDate);

}