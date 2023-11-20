// teacher-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherProfile } from '../../../../model/config/teacher-profile';
import { CrudService } from '../../../../services/crud.service';
import { AppResponse } from '../../../../dto/response.dto';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-profile-list.component.html',
  styleUrls: ['./teacher-profile-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'contactNumber',
    'department',
    'employeeId',
    'academicSession',
    'courses', // Make sure 'courses' is included if it's a property in your Teacher model
    'actions'
  ];

  dataSource: TeacherProfile[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('teacher-profile').subscribe((res: AppResponse) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "teacher-profile").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/teacher-form']);
  }

}