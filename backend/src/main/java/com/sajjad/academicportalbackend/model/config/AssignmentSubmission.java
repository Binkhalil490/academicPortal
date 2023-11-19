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
public class AssignmentSubmission extends AuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @ManyToOne
    @JoinColumn(name = "assignment_id")
    private Assignment assignment;

    @Getter
    @ManyToOne
    @JoinColumn(name = "student_id")
    private StudentProfile student;

    private LocalDate submissionDate;
    private String submissionContent;
    private String grade;

    // Constructors, getters, and setters

    public void setAssignment(Assignment assignment) {
        this.assignment = assignment;
    }

    public StudentProfile getStudent() {
        return student;
    }

    public void setStudent(StudentProfile student) {
        this.student = student;
    }
}
