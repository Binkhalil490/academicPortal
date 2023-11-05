package com.sajjad.academicportalbackend.service.config;

import com.sajjad.academicportalbackend.dao.config.FeeDetailsRepository;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.FeeDetails;
import com.sajjad.academicportalbackend.service.super_classes.config.FeeDetailsService;
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
public class FeeDetailsServiceImpl implements FeeDetailsService {

    private final FeeDetailsRepository repository;

    @Override
    public Response storeData(FeeDetails data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
 repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }


    @Override
    public Response<Page<FeeDetails>> getAll(Pageable pageable) {
        return new Response<>(SUCCESS, null, repository.findByActive(true, pageable));
    }

    @Override
    public Response<FeeDetails> getById(Long id) {
        FeeDetails feeDetails = repository.findById(id).orElse(new FeeDetails());
        return new Response<>(SUCCESS, null, feeDetails);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(FeeDetails data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(FeeDetails data) {
//        boolean feeDetailsnameExists;
//        if (data.hasId()) {
//            feeDetailsnameExists = repository.existsByFeeDetailsname(data.getFeeDetailsname(), data.getId());
//        } else {
//            feeDetailsnameExists = repository.existsByFeeDetailsname(data.getFeeDetailsname());
//        }
//        return feeDetailsnameExists ? "Failed to register. FeeDetails already exists" : null;
        return null;
    }

}
