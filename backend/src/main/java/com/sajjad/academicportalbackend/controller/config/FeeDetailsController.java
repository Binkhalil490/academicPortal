package com.sajjad.academicportalbackend.controller.config;

import com.sajjad.academicportalbackend.controller.super_classes.CrudController;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.FeeDetails;
import com.sajjad.academicportalbackend.service.super_classes.config.FeeDetailsService;
import com.sajjad.academicportalbackend.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("feeDetails/")
public class FeeDetailsController implements CrudController<FeeDetails, Long> {
    private final FeeDetailsService feeDetailsService;

    @Override
    public ResponseEntity<Response> storeData(FeeDetails data) {
        Response response = feeDetailsService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<FeeDetails>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<FeeDetails>> response = feeDetailsService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<FeeDetails>> getOne(Long id) {
        Response<FeeDetails> response = feeDetailsService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = feeDetailsService.delete(id);
        return ResponseEntity.ok(response);
    }
}
