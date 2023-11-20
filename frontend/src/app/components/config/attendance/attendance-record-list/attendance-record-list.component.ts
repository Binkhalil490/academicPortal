import { Component, OnInit } from '@angular/core';
import { AttendanceRecord } from '../../../../model/config/attendance-record'; // Import the AttendanceRecord interface
import { CrudService } from '../../../../services/crud.service';
import { AppResponse } from 'src/app/dto/response.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'attendance-record-list',
  templateUrl: './attendance-record-list.component.html',
  styleUrls: ['./attendance-record-list.component.scss']
})
export class AttendanceRecordListComponent implements OnInit {

  displayedColumns: string[] = 
  [
    
    'student',
    'course',
    'date',
    'status',
    'actions'
    
];
  dataSource: AttendanceRecord[] = [];

  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getList('attendanceRecord').subscribe((res: AppResponse) => {
      this.dataSource = res.data.content
    }
    );
  }

  delete(index: number) {
    let id = this.dataSource[index].id as number;
    this.service.delete(id, "attendanceRecord").subscribe(() => {
      const newData = this.dataSource.filter((s, i) => i != index);
      this.dataSource = newData;
    })
  }

  edit(index: number) {
    this.service.data = { ...this.dataSource[index] };
    this.router.navigate(['/attendance-record-form']);
  }

  
}

