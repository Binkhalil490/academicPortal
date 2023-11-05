package com.sajjad.academicportalbackend.service.config;

import com.sajjad.academicportalbackend.dao.config.ExamResultRepository;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.ExamResult;
import com.sajjad.academicportalbackend.service.super_classes.config.ExamResultService;
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
public class ExamResultServiceImpl implements ExamResultService {

    private final ExamResultRepository repository;

    @Override
    public Response storeData(ExamResult data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
 repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }



    @Override
    public Response<Page<ExamResult>> getAll(Pageable pageable) {
        return new Response<>(SUCCESS, null, repository.findByActive(true, pageable));
    }

    @Override
    public Response<ExamResult> getById(Long id) {
        ExamResult examResult = repository.findById(id).orElse(new ExamResult());
        return new Response<>(SUCCESS, null, examResult);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(ExamResult data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(ExamResult data) {
//        boolean examResultnameExists;
//        if (data.hasId()) {
//            examResultnameExists = repository.existsByExamResultname(data.getExamResultname(), data.getId());
//        } else {
//            examResultnameExists = repository.existsByExamResultname(data.getExamResultname());
//        }
//        return examResultnameExists ? "Failed to register. ExamResult already exists" : null;
        return null;
    }

}
