package com.sajjad.academicportalbackend.model.config;


import com.sajjad.academicportalbackend.model.auth.User;
import com.sajjad.academicportalbackend.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class StudentProfile extends AuditableEntity {
    @Getter
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;
    private String roll;
    private String firstName;
    private String lastName;
    private String contactNumber;
    private String department;
    private String session;

}
