package com.sajjad.academicportalbackend.service.config;

import com.sajjad.academicportalbackend.dao.config.AssignmentSubmissionRepository;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.AssignmentSubmission;
import com.sajjad.academicportalbackend.service.super_classes.config.AssignmentSubmissionService;
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
public class AssignmentSubmissionServiceImpl implements AssignmentSubmissionService {

    private final AssignmentSubmissionRepository repository;

    @Override
    public Response storeData(AssignmentSubmission data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
 repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }



    @Override
    public Response<Page<AssignmentSubmission>> getAll(Pageable pageable) {
        return new Response<>(SUCCESS, null, repository.findByActive(true, pageable));
    }

    @Override
    public Response<AssignmentSubmission> getById(Long id) {
        AssignmentSubmission assignmentSubmission = repository.findById(id).orElse(new AssignmentSubmission());
        return new Response<>(SUCCESS, null, assignmentSubmission);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(AssignmentSubmission data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(AssignmentSubmission data) {
//        boolean assignmentSubmissionnameExists;
//        if (data.hasId()) {
//            assignmentSubmissionnameExists = repository.existsByAssignmentSubmissionname(data.getAssignmentSubmissionname(), data.getId());
//        } else {
//            assignmentSubmissionnameExists = repository.existsByAssignmentSubmissionname(data.getAssignmentSubmissionname());
//        }
//        return assignmentSubmissionnameExists ? "Failed to register. AssignmentSubmission already exists" : null;
        return null;
    }

}
