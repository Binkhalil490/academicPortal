import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../model/config/course'; // Import the Course interface
import { CrudService } from '../../../../services/crud.service';
import {Router} from "@angular/router";
import {AppResponse} from "../../../../dto/response.dto";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  displayedColumns: string[] = ['courseCode', 'courseName', 'description', 'courseMaterials', 'syllabus', 'actions'];
  dataSource: Course[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.service.getList('course').subscribe((res: AppResponse) => { // Assuming endpoint is 'course'
      this.dataSource = res.data.content;
    });
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "course").subscribe(() => { // Assuming endpoint is 'course'
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    });
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/course-form']); // Route to 'course-form' when editing
  }
}
