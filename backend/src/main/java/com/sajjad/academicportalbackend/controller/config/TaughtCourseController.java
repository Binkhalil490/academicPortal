package com.sajjad.academicportalbackend.controller.config;

import com.sajjad.academicportalbackend.controller.super_classes.CrudController;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.TaughtCourse;
import com.sajjad.academicportalbackend.service.super_classes.config.TaughtCourseService;
import com.sajjad.academicportalbackend.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("taughtCourse/")
public class TaughtCourseController implements CrudController<TaughtCourse, Long> {
    private final TaughtCourseService taughtCourseService;

    @Override
    public ResponseEntity<Response> storeData(TaughtCourse data) {
        Response response = taughtCourseService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<TaughtCourse>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<TaughtCourse>> response = taughtCourseService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<TaughtCourse>> getOne(Long id) {
        Response<TaughtCourse> response = taughtCourseService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = taughtCourseService.delete(id);
        return ResponseEntity.ok(response);
    }
}
