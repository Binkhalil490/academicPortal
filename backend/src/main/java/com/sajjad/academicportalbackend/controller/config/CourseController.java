package com.sajjad.academicportalbackend.controller.config;

import com.sajjad.academicportalbackend.controller.super_classes.CrudController;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.Course;
import com.sajjad.academicportalbackend.service.super_classes.config.CourseService;
import com.sajjad.academicportalbackend.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("course/")
public class CourseController implements CrudController<Course, Long> {
    private final CourseService courseService;

    @Override
    public ResponseEntity<Response> storeData(Course data) {
        Response response = courseService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<Course>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<Course>> response = courseService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Course>> getOne(Long id) {
        Response<Course> response = courseService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = courseService.delete(id);
        return ResponseEntity.ok(response);
    }
}
