package com.sajjad.academicportalbackend.model.config;

import com.sajjad.academicportalbackend.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
@Entity
public class FeeDetails extends AuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @ManyToOne
    @JoinColumn(name = "student_id")
    private StudentProfile student;

    private double amountDue;
    private LocalDate dueDate;

    // Constructors, getters, and setters

    public void setStudent(StudentProfile student) {
        this.student = student;
    }
}
