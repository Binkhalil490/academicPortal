package com.sajjad.academicportalbackend.service.config;

import com.sajjad.academicportalbackend.dao.config.ExamScheduleRepository;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.ExamSchedule;
import com.sajjad.academicportalbackend.service.super_classes.config.ExamScheduleService;
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
public class ExamScheduleServiceImpl implements ExamScheduleService {

    private final ExamScheduleRepository repository;

    @Override
    public Response storeData(ExamSchedule data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
 repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }


    @Override
    public Response<Page<ExamSchedule>> getAll(Pageable pageable) {
        return new Response<>(SUCCESS, null, repository.findByActive(true, pageable));
    }

    @Override
    public Response<ExamSchedule> getById(Long id) {
        ExamSchedule examSchedule = repository.findById(id).orElse(new ExamSchedule());
        return new Response<>(SUCCESS, null, examSchedule);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(ExamSchedule data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(ExamSchedule data) {
//        boolean examSchedulenameExists;
//        if (data.hasId()) {
//            examSchedulenameExists = repository.existsByExamSchedulename(data.getExamSchedulename(), data.getId());
//        } else {
//            examSchedulenameExists = repository.existsByExamSchedulename(data.getExamSchedulename());
//        }
//        return examSchedulenameExists ? "Failed to register. ExamSchedule already exists" : null;
        return null;
    }

}
