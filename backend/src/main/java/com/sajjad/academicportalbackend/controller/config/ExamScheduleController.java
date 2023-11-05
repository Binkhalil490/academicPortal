package com.sajjad.academicportalbackend.controller.config;

import com.sajjad.academicportalbackend.controller.super_classes.CrudController;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.ExamSchedule;
import com.sajjad.academicportalbackend.service.super_classes.config.ExamScheduleService;
import com.sajjad.academicportalbackend.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("examSchedule/")
public class ExamScheduleController implements CrudController<ExamSchedule, Long> {
    private final ExamScheduleService examScheduleService;

    @Override
    public ResponseEntity<Response> storeData(ExamSchedule data) {
        Response response = examScheduleService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<ExamSchedule>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<ExamSchedule>> response = examScheduleService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<ExamSchedule>> getOne(Long id) {
        Response<ExamSchedule> response = examScheduleService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = examScheduleService.delete(id);
        return ResponseEntity.ok(response);
    }
}
