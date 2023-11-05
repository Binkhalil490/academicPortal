import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppResponse } from '../../../../dto/response.dto';
import { User } from 'src/app/model/auth/user'; // Import the User interface
import { CrudService } from 'src/app/services/crud.service';
import { StudentProfile } from 'src/app/model/config/student-profile';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-profile-list.component.html',
  styleUrls: ['./student-profile-list.component.scss']
})
export class StudentListComponent implements OnInit {

  displayedColumns: string[] = ['firstName','lastName','contactNumber','academicHistory','actions'];
  dataSource: StudentProfile[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('studentProfile').then((res: AppResponse) => {  // Assuming endpoint is 'user'
      this.dataSource = res.data.content;
    });
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "studentProfile").subscribe(() => {  // Assuming endpoint is 'user'
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    });
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/student-form']);  // Route to 'student-form' when editing a student
  }
}
