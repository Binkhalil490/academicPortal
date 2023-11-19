package com.sajjad.academicportalbackend.model.config;

import com.sajjad.academicportalbackend.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
@Getter
@Setter
@Entity
public class Enrollment extends AuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @ManyToOne
    @JoinColumn(name = "student_id")
    private StudentProfile student;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    private LocalDate enrollmentDate;

    // Constructors, getters, and setters

    public void setStudent(StudentProfile student) {
        this.student = student;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
