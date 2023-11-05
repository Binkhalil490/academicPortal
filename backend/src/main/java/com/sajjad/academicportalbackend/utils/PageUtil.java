package com.sajjad.academicportalbackend.utils;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.util.StringUtils;

public class PageUtil {

    public static Pageable getPageable(Integer pageNumber, Integer pageSize, String sortDirection, String sortCriteria) {
        int page = pageNumber == null ? 0 : pageNumber;
        int size = pageSize == null ? 10 : pageSize;
        String[] sortColumns = {"id"};
        if (StringUtils.hasText(sortCriteria)) {
            sortColumns = sortCriteria.split(" *, *");
        }
        if (!StringUtils.hasText(sortDirection)) {
            sortDirection = "DESC";
        }
        return PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(sortDirection), sortColumns));
    }
}
