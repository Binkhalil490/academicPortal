import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { StudentProfile } from '../../../../model/config/student-profile'; // Update the import
import { CrudService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { NotificationUtil } from '../../../../utils/notification.util';
import { OperationStatus } from 'src/app/constants/status.enum';

@Component({
  selector: 'app-student-profile-form',
  templateUrl: './student-profile-form.component.html',
  styleUrls: ['./student-profile-form.component.scss']
})
export class StudentProfileFormComponent
implements OnInit {
  formGroup!: FormGroup;
  controls: any = {
    "firstName": new FormControl('', []),
    "lastName": new FormControl('', []),
    "contactNumber": new FormControl('', []),
    "academicHistory": new FormControl('', []),
  };
  submitted = false;
  endPoint = "studentProfile";
  data: any = {}

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
    const values: StudentProfile = { ...this.data, ...this.formGroup.value };
    this.service.save(values, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
      this.noticeUtil.showResponseMessage(response);
    },
    (error: Error) => {
      const res = {status: OperationStatus.FAILURE, message: "Server error! Please contact with support team."};
      this.noticeUtil.showResponseMessage(res);
      console.log(this.endPoint, error);
    });
  }
}
