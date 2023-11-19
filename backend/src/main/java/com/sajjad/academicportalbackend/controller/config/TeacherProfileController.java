package com.sajjad.academicportalbackend.controller.config;

import com.sajjad.academicportalbackend.controller.super_classes.CrudController;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.TeacherProfile;
import com.sajjad.academicportalbackend.service.super_classes.config.TeacherProfileService;
import com.sajjad.academicportalbackend.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("teacher-profile/")
public class TeacherProfileController implements CrudController<TeacherProfile, Long> {
    private final TeacherProfileService teacherProfileService;

    @Override
    public ResponseEntity<Response> storeData(TeacherProfile data) {
        Response response = teacherProfileService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<TeacherProfile>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<TeacherProfile>> response = teacherProfileService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<TeacherProfile>> getOne(Long id) {
        Response<TeacherProfile> response = teacherProfileService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = teacherProfileService.delete(id);
        return ResponseEntity.ok(response);
    }
}
