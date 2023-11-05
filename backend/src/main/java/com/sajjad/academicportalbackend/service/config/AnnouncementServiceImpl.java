package com.sajjad.academicportalbackend.service.config;

import com.sajjad.academicportalbackend.dao.config.AnnouncementRepository;
import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.Announcement;
import com.sajjad.academicportalbackend.model.config.Assignment;
import com.sajjad.academicportalbackend.service.super_classes.config.AnnouncementService;
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
public class AnnouncementServiceImpl implements AnnouncementService {

    private final AnnouncementRepository repository;

    @Override
    public Response storeData(Announcement data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
 repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }


    @Override
    public Response<Page<Announcement>> getAll(Pageable pageable) {
        return new Response<>(SUCCESS, null, repository.findByActive(true, pageable));
    }

    @Override
    public Response<Announcement> getById(Long id) {
        Announcement branch = repository.findById(id).orElse(new Announcement());
        return new Response<>(SUCCESS, null, branch);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Announcement data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Announcement data) {
//        boolean branchnameExists;
//        if (data.hasId()) {
//            branchnameExists = repository.existsByAnnouncementname(data.getAnnouncementname(), data.getId());
//        } else {
//            branchnameExists = repository.existsByAnnouncementname(data.getAnnouncementname());
//        }
//        return branchnameExists ? "Failed to register. Announcement already exists" : null;
        return null;
    }

    @Override
    public Response storeData(Assignment data) {
        return null;
    }
}
