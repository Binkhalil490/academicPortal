package com.sajjad.academicportalbackend.controller.config;

import com.sajjad.academicportalbackend.controller.super_classes.CrudController;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.ExamResult;
import com.sajjad.academicportalbackend.service.super_classes.config.ExamResultService;
import com.sajjad.academicportalbackend.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("examResult/")
public class ExamResultController implements CrudController<ExamResult, Long> {
    private final ExamResultService examResultService;

    @Override
    public ResponseEntity<Response> storeData(ExamResult data) {
        Response response = examResultService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<ExamResult>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<ExamResult>> response = examResultService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<ExamResult>> getOne(Long id) {
        Response<ExamResult> response = examResultService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = examResultService.delete(id);
        return ResponseEntity.ok(response);
    }
}
