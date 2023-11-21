package com.sajjad.academicportalbackend.model.config;

import com.sajjad.academicportalbackend.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;
@Getter
@Setter
@Entity
public class ExamSchedule extends AuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    private LocalDate examDate;
    private String examDetails;

    // Constructors, getters, and setters

    // Getters and setters for other fields

    public void setCourse(Course course) {
        this.course = course;
    }
}
