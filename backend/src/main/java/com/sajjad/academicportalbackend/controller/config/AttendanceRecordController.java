package com.sajjad.academicportalbackend.controller.config;

import com.sajjad.academicportalbackend.controller.super_classes.CrudController;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.AttendanceRecord;
import com.sajjad.academicportalbackend.service.super_classes.config.AttendanceRecordService;
import com.sajjad.academicportalbackend.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("attendanceRecord/")
public class AttendanceRecordController implements CrudController<AttendanceRecord, Long> {
    private final AttendanceRecordService attendanceRecordService;

    @Override
    public ResponseEntity<Response> storeData(AttendanceRecord data) {
        Response response = attendanceRecordService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<AttendanceRecord>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<AttendanceRecord>> response = attendanceRecordService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<AttendanceRecord>> getOne(Long id) {
        Response<AttendanceRecord> response = attendanceRecordService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = attendanceRecordService.delete(id);
        return ResponseEntity.ok(response);
    }
}
