import { Component, OnInit } from '@angular/core';
import { TeacherProfile } from '../../../../model/config/teacher-profile'; // Import the TeacherProfile interface
import { CrudService } from '../../../../services/crud.service';
import {AppResponse} from "../../../../dto/response.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-teacher-profile-list',
  templateUrl: './teacher-profile-list.component.html',
  styleUrls: ['./teacher-profile-list.component.scss']
})
export class TeacherProfileListComponent implements OnInit {

  displayedColumns: string[] = ['firstName','lastName','contactNumber','educationalBackground','actions'];
  dataSource: TeacherProfile[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('teacherProfile').then((res: AppResponse) => {  // Assuming endpoint is 'user'
      this.dataSource = res.data.content;
    });
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "teacherProfile").subscribe(() => {  // Assuming endpoint is 'user'
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    });
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/teacher-form']);  // Route to 'teacher-form' when editing a teacher
  }
}
