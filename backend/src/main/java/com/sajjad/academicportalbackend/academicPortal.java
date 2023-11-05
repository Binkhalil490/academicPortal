package com.sajjad.academicportalbackend;

import com.sajjad.academicportalbackend.dao.config.StudentProfileRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
//import org.springframework.security.core.context.SecurityContextHolder;

@SpringBootApplication
@EnableJpaAuditing
public class academicPortal {

    public static ApplicationContext context;

    public static void main(String[] args) {
        context = SpringApplication.run(academicPortal.class, args);
        StudentProfileRepository studentProfileRepository = context.getBean(StudentProfileRepository.class);

    }

    public static String getCurrentUsername(){
//        return SecurityContextHolder.getContext().getAuthentication().getName();
        return "";
    }


}
