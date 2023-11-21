package com.sajjad.academicportalbackend.model.config;

import com.sajjad.academicportalbackend.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Course extends AuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String courseCode;
    private String courseName;
    private String description;
    private String courseMaterials;
    private String syllabus;


    @ManyToMany(fetch = FetchType.EAGER)
    private List<TeacherProfile> teachers;







}
