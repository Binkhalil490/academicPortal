package com.sajjad.academicportalbackend.service.config;

import com.sajjad.academicportalbackend.dao.config.EnrollmentRepository;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.Enrollment;
import com.sajjad.academicportalbackend.service.super_classes.config.EnrollmentService;
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
public class EnrollmentServiceImpl implements EnrollmentService {

    private final EnrollmentRepository repository;

    @Override
    public Response storeData(Enrollment data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
 repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Enrollment>> getAll(Pageable pageable) {
        return new Response<>(SUCCESS, null, repository.findByActive(true, pageable));
    }

    @Override
    public Response<Enrollment> getById(Long id) {
        Enrollment enrollment = repository.findById(id).orElse(new Enrollment());
        return new Response<>(SUCCESS, null, enrollment);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Enrollment data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Enrollment data) {
//        boolean enrollmentnameExists;
//        if (data.hasId()) {
//            enrollmentnameExists = repository.existsByEnrollmentname(data.getEnrollmentname(), data.getId());
//        } else {
//            enrollmentnameExists = repository.existsByEnrollmentname(data.getEnrollmentname());
//        }
//        return enrollmentnameExists ? "Failed to register. Enrollment already exists" : null;
        return null;
    }

}
