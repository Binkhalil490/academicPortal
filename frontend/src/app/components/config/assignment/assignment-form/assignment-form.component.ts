// assignment-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Course } from '../../../../model/config/course'; // Update with your actual path
import { Assignment } from '../../../../model/config/assignment'; // Update with your actual path
import { CrudService } from '../../../../services/crud.service';
import { NotificationUtil } from '../../../../utils/notification.util';
import { OperationStatus } from 'src/app/constants/status.enum';
import { populateFormControl } from 'src/app/utils/object.util';

@Component({
  selector: 'assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.scss'],
})
export class AssignmentFormComponent 
  implements OnInit {
  formGroup!: FormGroup;
  controls: any = {
    "id": new FormControl('', []),
    "title": new FormControl('', []),
    "description": new FormControl('', []),
    "dueDate": new FormControl('', []),
    "courseId": new FormControl('', []),
    
    "courses": new FormControl([], []),
  };
  submitted = false;
  endPoint = "assignment";
  data: any = {};
  courses: Course[] = [];

  constructor(private formBuilder: FormBuilder, private service: CrudService, private noticeUtil: NotificationUtil) { }

  ngOnInit() {
    this.service.getList("course", 0, 10000).subscribe(value => {
      this.courses = value.data.content;
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
   
    const courseList: Course[] = this.formGroup.value.courses.map((courseId: number) => {
      return { id: courseId };
    });

    const values: Assignment = { 
      ...this.data, 
      ...this.formGroup.value ,
      courses : courseList,
      
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
