package com.sajjad.academicportalbackend.service.config;

import com.sajjad.academicportalbackend.dao.auth.UserRepository;
import com.sajjad.academicportalbackend.dao.config.StudentProfileRepository;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.StudentProfile;
import com.sajjad.academicportalbackend.service.super_classes.config.StudentProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import static com.sajjad.academicportalbackend.academicPortal.getCurrentUsername;
import static com.sajjad.academicportalbackend.constants.enums.OperationStatus.FAILURE;
import static com.sajjad.academicportalbackend.constants.enums.OperationStatus.SUCCESS;

@Service
@RequiredArgsConstructor
public class StudentProfileServiceImpl implements StudentProfileService {
    private final UserRepository userRepository;
    private final StudentProfileRepository repository;

    @Override
    public Response storeData(StudentProfile data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            userRepository.save(data.getUser());
            repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }


    @Override
    public Response<Page<StudentProfile>> getAll(Pageable pageable) {
        return new Response<>(SUCCESS, null, repository.findByActive(true, pageable));
    }

    @Override
    public Response<StudentProfile> getById(Long id) {
        StudentProfile studentProfile = repository.findById(id).orElse(new StudentProfile());
        return new Response<>(SUCCESS, null, studentProfile);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(StudentProfile data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(StudentProfile data) {
//        boolean studentProfilenameExists;
//        if (data.hasId()) {
//            studentProfilenameExists = repository.existsByStudentProfilename(data.getStudentProfilename(), data.getId());
//        } else {
//            studentProfilenameExists = repository.existsByStudentProfilename(data.getStudentProfilename());
//        }
//        return studentProfilenameExists ? "Failed to register. StudentProfile already exists" : null;
        return null;
    }

}
