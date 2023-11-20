import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AttendanceRecord } from '../../../../model/config/attendance-record'; // Import the AttendanceRecord interface
import { CrudService } from '../../../../services/crud.service';
import { populateFormControl } from 'src/app/utils/object.util';
import { OperationStatus } from 'src/app/constants/status.enum';
import { NotificationUtil } from 'src/app/utils/notification.util';
import { Course } from 'src/app/model/config/course';
import { StudentProfile } from 'src/app/model/config/student-profile';

@Component({
  selector: 'attendance-record-form',
  templateUrl: './attendance-record-form.component.html',
  styleUrls: ['./attendance-record-form.component.scss']
})

export class AttendanceRecordFormComponent
  implements OnInit {
  formGroup!: FormGroup;
  controls: any = {
    "id": new FormControl('', []),
    "student": new FormControl('', []),
    "course": new FormControl('', []),
    "date": new FormControl('', []),
    "status": new FormControl('', []),
  };
  submitted = false;
  endPoint = "attendanceRecord";
  data: any = {};
  courses: Course[] = [];
  students: StudentProfile[] = [];


  constructor(private formBuilder: FormBuilder, private service: CrudService, private noticeUtil: NotificationUtil) { }

  ngOnInit() {

    this.service.getList("course", 0, 10000).subscribe(value => {
      this.courses = value.data.content;
    })
    this.service.getList("studentProfile", 0, 10000).subscribe(value => {
      this.students = value.data.content;
    })
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.formGroup.controls, this.data);
    }
  }

  createForm() {
    this.formGroup = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }




    const values: AttendanceRecord = {
      ...this.data,
      ...this.formGroup.value,
      course : {id: Number( this.formGroup.value.course)},
      student : {id: Number(this.formGroup.value.student)},
    };

    this.service.save(values, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
      this.noticeUtil.showResponseMessage(response);
    },
      (error: Error) => {
        const res = { status: OperationStatus.FAILURE, message: "Server error! Please contact the support team." };
        this.noticeUtil.showResponseMessage(res);
        console.log(this.endPoint, error);
      });
  }
}