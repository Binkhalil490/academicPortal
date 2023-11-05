package com.sajjad.academicportalbackend.service.super_classes.config;

import com.sajjad.academicportalbackend.dto.Response;
import com.sajjad.academicportalbackend.model.config.Announcement;
import com.sajjad.academicportalbackend.model.config.Assignment;
import com.sajjad.academicportalbackend.service.super_classes.CrudService;

public interface AnnouncementService extends CrudService<Announcement, Long> {

    Response storeData(Assignment data);
}
