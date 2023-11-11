package com.sajjad.academicportalbackend.service.config;

import com.sajjad.academicportalbackend.dao.config.TaughtCourseRepository;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.service.super_classes.config.TaughtCourseService;
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
public class TaughtCourseServiceImpl implements TaughtCourseService {

    private final TaughtCourseRepository repository;

    @Override
    public Response storeData(TaughtCourse data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
 repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }


    @Override
    public Response<Page<TaughtCourse>> getAll(Pageable pageable) {
        return new Response<>(SUCCESS, null, repository.findByActive(true, pageable));
    }

    @Override
    public Response<TaughtCourse> getById(Long id) {
        TaughtCourse taughtCourse = repository.findById(id).orElse(new TaughtCourse());
        return new Response<>(SUCCESS, null, taughtCourse);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(TaughtCourse data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(TaughtCourse data) {
//        boolean taughtCoursenameExists;
//        if (data.hasId()) {
//            taughtCoursenameExists = repository.existsByTaughtCoursename(data.getTaughtCoursename(), data.getId());
//        } else {
//            taughtCoursenameExists = repository.existsByTaughtCoursename(data.getTaughtCoursename());
//        }
//        return taughtCoursenameExists ? "Failed to register. TaughtCourse already exists" : null;
        return null;
    }

}
