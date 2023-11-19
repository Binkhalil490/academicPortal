package com.sajjad.academicportalbackend.model.config;

import com.sajjad.academicportalbackend.model.auth.User;
import com.sajjad.academicportalbackend.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class TeacherProfile extends AuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    private String firstName;
    private String lastName;
    private String contactNumber;
    private String department;
    private String employeeId; // Specific to teachers
    private String academicSession;

//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "teacher_id")
//    private List<Course> coursesTaught = new ArrayList<>();
    @ManyToMany
    private List<Course> courses;
}
