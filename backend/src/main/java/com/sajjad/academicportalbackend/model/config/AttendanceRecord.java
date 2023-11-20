package com.sajjad.academicportalbackend.model.config;

import com.sajjad.academicportalbackend.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
@Entity
public class AttendanceRecord extends AuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "student_id")
    private StudentProfile student;

    @Getter
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "course_id")
    private Course course;

    private LocalDate date;
    private String status;  // You can define an enum for better representation (present, absent, etc.)

    // Constructors, getters, and setters

    public void setStudent(StudentProfile student) {
        this.student = student;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
