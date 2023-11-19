// assignment-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../../../services/crud.service';
import { NotificationUtil } from '../../../../utils/notification.util';
import { OperationStatus } from 'src/app/constants/status.enum';
import { populateFormControl } from 'src/app/utils/object.util';
import { AssignmentSubmission } from 'src/app/model/config/assignment-submission';


@Component({
  selector: 'assignment-sub-form',
  templateUrl: './assign-sub-form.component.html',
  styleUrls: ['./assign-sub-form.component.scss'],
})
export class AssignSubFormComponent  
  implements OnInit {
  formGroup!: FormGroup;
  controls: any = {
    "id": new FormControl('', []),
    "assignmentId": new FormControl('', []),
    "studentId": new FormControl('', []),
    "submissionDate": new FormControl('', []),
    "submissionContent": new FormControl('', []),
    "grade": new FormControl([], []),
  };
  submitted = false;
  endPoint = "assignmentSubmission";
  data: any = {};
  

  constructor(private formBuilder: FormBuilder, private service: CrudService, private noticeUtil: NotificationUtil) { }

  ngOnInit() {
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
   
  

    const values: AssignmentSubmission = { 
      ...this.data, 
      ...this.formGroup.value ,
      
      
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
