package com.sajjad.academicportalbackend.controller.config;

import com.sajjad.academicportalbackend.controller.super_classes.CrudController;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.StudentProfile;
import com.sajjad.academicportalbackend.service.super_classes.config.StudentProfileService;
import com.sajjad.academicportalbackend.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("studentProfile/")
public class StudentProfileController implements CrudController<StudentProfile, Long> {
    private final StudentProfileService studentProfileService;

    @Override
    public ResponseEntity<Response> storeData(StudentProfile data) {
        Response response = studentProfileService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<StudentProfile>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<StudentProfile>> response = studentProfileService.getAll(pageable);
        response.getData().getContent().forEach(studentProfile -> studentProfile.setUser(null));
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<StudentProfile>> getOne(Long id) {
        Response<StudentProfile> response = studentProfileService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = studentProfileService.delete(id);
        return ResponseEntity.ok(response);
    }
}
