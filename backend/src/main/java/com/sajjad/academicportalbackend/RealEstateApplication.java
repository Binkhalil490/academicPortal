package com.sajjad.academicportalbackend;

import com.sajjad.academicportalbackend.dao.config.StudentProfileRepository;
import com.sajjad.academicportalbackend.model.config.StudentProfile;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
//import org.springframework.security.core.context.SecurityContextHolder;

@SpringBootApplication
@EnableJpaAuditing
public class RealEstateApplication {

    public static ApplicationContext context;

    public static void main(String[] args) {
        context = SpringApplication.run(RealEstateApplication.class, args);
        StudentProfileRepository studentProfileRepository = context.getBean(StudentProfileRepository.class);

    }

    public static String getCurrentUsername(){
//        return SecurityContextHolder.getContext().getAuthentication().getName();
        return "";
    }


}
