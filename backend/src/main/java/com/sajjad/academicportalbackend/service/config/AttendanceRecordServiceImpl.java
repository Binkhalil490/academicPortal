package com.sajjad.academicportalbackend.service.config;

import com.sajjad.academicportalbackend.dao.config.AttendanceRecordRepository;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.AttendanceRecord;
import com.sajjad.academicportalbackend.service.super_classes.config.AttendanceRecordService;
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
public class AttendanceRecordServiceImpl implements AttendanceRecordService {

    private final AttendanceRecordRepository repository;

    @Override
    public Response storeData(AttendanceRecord data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
 repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }


    @Override
    public Response<Page<AttendanceRecord>> getAll(Pageable pageable) {
        return new Response<>(SUCCESS, null, repository.findByActive(true, pageable));
    }

    @Override
    public Response<AttendanceRecord> getById(Long id) {
        AttendanceRecord attendanceRecord = repository.findById(id).orElse(new AttendanceRecord());
        return new Response<>(SUCCESS, null, attendanceRecord);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(AttendanceRecord data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(AttendanceRecord data) {
//        boolean attendanceRecordnameExists;
//        if (data.hasId()) {
//            attendanceRecordnameExists = repository.existsByAttendanceRecordname(data.getAttendanceRecordname(), data.getId());
//        } else {
//            attendanceRecordnameExists = repository.existsByAttendanceRecordname(data.getAttendanceRecordname());
//        }
//        return attendanceRecordnameExists ? "Failed to register. AttendanceRecord already exists" : null;
        return null;
    }

}
