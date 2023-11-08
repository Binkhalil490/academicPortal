package com.sajjad.academicportalbackend.dto;

import lombok.Data;

@Data
public class StudentDto {
    private Long userId;
    private String firstName;
    private String lastName;
    private String contactNumber;
    private String department;
    private String session;
    private String username;
    private String password;
    private String email;
    private String role;
}
