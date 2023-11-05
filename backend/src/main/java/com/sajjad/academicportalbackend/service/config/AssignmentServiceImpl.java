package com.sajjad.academicportalbackend.service.config;

import com.sajjad.academicportalbackend.dao.config.AssignmentRepository;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.Assignment;
import com.sajjad.academicportalbackend.service.super_classes.config.AssignmentService;
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
public class AssignmentServiceImpl implements AssignmentService {

    private final AssignmentRepository repository;

    @Override
    public Response storeData(Assignment data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
 repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }


    @Override
    public Response<Page<Assignment>> getAll(Pageable pageable) {
        return new Response<>(SUCCESS, null, repository.findByActive(true, pageable));
    }

    @Override
    public Response<Assignment> getById(Long id) {
        Assignment Assignment = repository.findById(id).orElse(new Assignment());
        return new Response<>(SUCCESS, null, Assignment);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Assignment data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Assignment data) {
//        boolean AssignmentnameExists;
//        if (data.hasId()) {
//            AssignmentnameExists = repository.existsByAssignmentname(data.getAssignmentname(), data.getId());
//        } else {
//            AssignmentnameExists = repository.existsByAssignmentname(data.getAssignmentname());
//        }
//        return AssignmentnameExists ? "Failed to register. Assignment already exists" : null;
        return null;
    }

}
