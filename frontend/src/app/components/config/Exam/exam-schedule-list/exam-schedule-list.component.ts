
import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../model/config/course'; // Import the Course interface
import { CrudService } from '../../../../services/crud.service';
import { Router } from "@angular/router";
import { AppResponse } from "../../../../dto/response.dto";
import { ExamSchedule } from 'src/app/model/config/examSchedule';

@Component({
  selector: 'exam-schedule-list',
  templateUrl: './exam-schedule-list.component.html',
  styleUrls: ['./exam-schedule-list.component.scss']
})
export class ExamScheduleListComponent {
  displayedColumns: string[] = [
    'courseCode',
    'courseName',
    // 'courses',
    'examDate',
    'examDetails',
    'actions'];
  dataSource: ExamSchedule[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    // this.loadCourses();
    this.service.getList('examSchedule').subscribe((res: AppResponse) => {
      this.dataSource = res.data.content
    }
    );
  }

  loadCourses() {
    this.service.getList('examSchedule').subscribe((res: AppResponse) => { // Assuming endpoint is 'course'
      this.dataSource = res.data.content;

    });
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "examSchedule").subscribe(() => { // Assuming endpoint is 'course'
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    });
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/exam-schedule-form']); // Route to 'course-form' when editing
  }

}
