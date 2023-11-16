    package com.sajjad.academicportalbackend.model.config;

    import com.sajjad.academicportalbackend.model.super_classes.AuditableEntity;
    import jakarta.persistence.*;
    import lombok.Getter;
    import lombok.Setter;

    import java.time.LocalDate;
    @Getter
    @Setter
    @Entity
    public class Assignment extends AuditableEntity {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @ManyToOne
        @JoinColumn(name = "course_id")
        private Course course;

        private String title;
        private String description;
        private LocalDate dueDate;

        // Constructors, getters, and setters

        public void setCourse(Course course) {
            this.course = course;
        }
    }
