import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../../../services/crud.service';
import { NotificationUtil } from '../../../../utils/notification.util';
import { OperationStatus } from 'src/app/constants/status.enum';
import { populateFormControl } from 'src/app/utils/object.util';
import { ExamSchedule } from 'src/app/model/config/examSchedule';
import { Course } from 'src/app/model/config/course';
import { AppResponse } from 'src/app/dto/response.dto';
import { Page } from 'src/app/dto/page.dto';

@Component({
  selector: 'exam-schedule-form',
  templateUrl: './exam-schedule-form.component.html',
  styleUrls: ['./exam-schedule-form.component.scss'],
})
export class ExamScheduleFormComponent implements OnInit {
  formGroup!: FormGroup;
  controls: any = {
    id: new FormControl('', []),
    courseName: new FormControl('', []),
    courseCode: new FormControl('', []),
    examDetails: new FormControl('', []),
    examDate: new FormControl('', []),
    courses: new FormControl([], []),
  };
  submitted = false;
  endPoint = 'examSchedule';
  data: any = {};
  courses: Course[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: CrudService,
    private noticeUtil: NotificationUtil
  ) {}

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      populateFormControl(this.formGroup.controls, this.data);
    }
    this.service.getList('course', 0, 10000).subscribe((res: AppResponse) => {
      const page: Page = res.data;
      this.courses = page.content;
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group(this.controls);
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
  
    const selectedCourseId: number = this.formGroup.value.courses[0]; // Assuming it's a single selection
  
    const values: ExamSchedule = {
      ...this.data,
      ...this.formGroup.value,
      courses: [{ id: selectedCourseId, courseName: this.formGroup.value.courseName, courseCode: this.formGroup.value.courseCode }],
    };
  
    this.service.save(values, this.endPoint).subscribe(
      (response) => {
        this.formGroup.reset();
        this.submitted = false;
        this.noticeUtil.showResponseMessage(response);
      },
      (error: Error) => {
        const res = {
          status: OperationStatus.FAILURE,
          message: 'Server error! Please contact the support team.',
        };
        this.noticeUtil.showResponseMessage(res);
        console.log(this.endPoint, error);
      }
    );
  }
  
}
