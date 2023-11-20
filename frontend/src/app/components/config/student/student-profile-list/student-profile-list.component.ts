import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentProfile } from '../../../../model/config/student-profile';
import { CrudService } from '../../../../services/crud.service';
import { AppResponse } from '../../../../dto/response.dto';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-profile-list.component.html',
  styleUrls: ['./student-profile-list.component.scss']
})
export class StudentListComponent implements OnInit {

  displayedColumns: string[] = 
  [
    'firstName',  
    'lastName',
    'contactNumber',
    'department',
    'roll',
    'session',
    'actions'
];
  dataSource: StudentProfile[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('studentProfile').subscribe((res: AppResponse) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "studentProfile").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/student-form']);
  }

  
}
