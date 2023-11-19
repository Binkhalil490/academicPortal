package com.sajjad.academicportalbackend.service.config;

import com.sajjad.academicportalbackend.dao.auth.UserRepository;
import com.sajjad.academicportalbackend.dao.config.TeacherProfileRepository;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.TeacherProfile;
import com.sajjad.academicportalbackend.service.super_classes.config.TeacherProfileService;
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
public class TeacherProfileServiceImpl implements TeacherProfileService {
    private final UserRepository userRepository;
    private final TeacherProfileRepository repository;

    @Override
    public Response storeData(TeacherProfile data) {
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
    public Response<Page<TeacherProfile>> getAll(Pageable pageable) {
        return new Response<>(SUCCESS, null, repository.findByActive(true, pageable));
    }

    @Override
    public Response<TeacherProfile> getById(Long id) {
        TeacherProfile teacherProfile = repository.findById(id).orElse(new TeacherProfile());
        return new Response<>(SUCCESS, null, teacherProfile);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(TeacherProfile data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(TeacherProfile data) {
//        boolean teacherProfilenameExists;
//        if (data.hasId()) {
//            teacherProfilenameExists = repository.existsByTeacherProfilename(data.getTeacherProfilename(), data.getId());
//        } else {
//            teacherProfilenameExists = repository.existsByTeacherProfilename(data.getTeacherProfilename());
//        }
//        return teacherProfilenameExists ? "Failed to register. TeacherProfile already exists" : null;
        return null;
    }

}
