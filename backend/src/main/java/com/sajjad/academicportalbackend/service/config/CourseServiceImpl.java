package com.sajjad.academicportalbackend.service.config;

import com.sajjad.academicportalbackend.dao.config.CourseRepository;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.Course;
import com.sajjad.academicportalbackend.service.super_classes.config.CourseService;
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
public class CourseServiceImpl implements CourseService {

    private final CourseRepository repository;

    @Override
    public Response storeData(Course data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
 repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }


    @Override
    public Response<Page<Course>> getAll(Pageable pageable) {
        return new Response<>(SUCCESS, null, repository.findByActive(true, pageable));
    }

    @Override
    public Response<Course> getById(Long id) {
        Course course = repository.findById(id).orElse(new Course());
        return new Response<>(SUCCESS, null, course);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Course data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Course data) {
//        boolean coursenameExists;
//        if (data.hasId()) {
//            coursenameExists = repository.existsByCoursename(data.getCoursename(), data.getId());
//        } else {
//            coursenameExists = repository.existsByCoursename(data.getCoursename());
//        }
//        return coursenameExists ? "Failed to register. Course already exists" : null;
        return null;
    }

}
