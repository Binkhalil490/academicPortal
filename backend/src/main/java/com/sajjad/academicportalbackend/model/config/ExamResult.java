package com.sajjad.academicportalbackend.model.config;

import com.sajjad.academicportalbackend.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Entity
public class ExamResult extends AuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @ManyToOne
    @JoinColumn(name = "student_id")
    private StudentProfile student;

    @Getter
    @ManyToOne
    @JoinColumn(name = "exam_schedule_id")
    private ExamSchedule examSchedule;

    private int marks;
    private String grade;

    // Constructors, getters, and setters

    public void setStudent(StudentProfile student) {
        this.student = student;
    }

    public void setExamSchedule(ExamSchedule examSchedule) {
        this.examSchedule = examSchedule;
    }
}
