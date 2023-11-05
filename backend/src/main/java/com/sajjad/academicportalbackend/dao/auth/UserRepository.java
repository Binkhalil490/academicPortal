package com.sajjad.academicportalbackend.dao.auth;

import com.sajjad.academicportalbackend.model.auth.User;
import org.springframework.data.jpa.repository.JpaRepository;
import com.sajjad.academicportalbackend.dao.super_classes.CrudDao;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface UserRepository extends JpaRepository<User, Long>, CrudDao<User, Long> {
    boolean existsByUsername(String username);

    @Query(value = "SELECT case when count(e) > 0 then true else false end " +
            "FROM User e " +
            "where e.username = :username and e.id <> :id")
    boolean existsByUsername(@Param("username") String username, @Param("id") Long id);

    @Modifying
    @Query(value = "UPDATE User e " +
            "SET e.active = false, e.modifiedBy = :modifiedBy, e.modifiedDate = :modifiedDate " +
            "where e.id = :id")
    int softDeleteById(@Param("id") Long id, @Param("modifiedBy") String modifiedBy, @Param("modifiedDate") LocalDateTime modifiedDate);

}