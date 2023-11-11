import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TeacherProfile } from '../../../../model/config/teacher-profile'; // Update the import
import { CrudService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { NotificationUtil } from '../../../../utils/notification.util';
import { OperationStatus } from 'src/app/constants/status.enum';
import { User } from 'src/app/model/auth/user';

@Component({
  selector: 'app-teacher-profile-form',
  templateUrl: './teacher-profile-form.component.html',
  styleUrls: ['./teacher-profile-form.component.scss'],
})
export class TeacherProfileFormComponent
  implements OnInit {
  formGroup!: FormGroup;
  controls: any = {
    "firstName": new FormControl('', []),
    "lastName": new FormControl('', []),
    "contactNumber": new FormControl('', []),
    "department": new FormControl('', []),
    "employeeId": new FormControl('', []), // Add Employee ID field
    "academicSession": new FormControl('', []), // Add Academic Session field
    "email": new FormControl('', []),
    "username": new FormControl('', []),
    "password": new FormControl('', []),
    "role": new FormControl('', []),
  };
  submitted = false;
  endPoint = "teacher-profile";
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
    const user: User = {
      username: this.formGroup.value.username,
      password: this.formGroup.value.password,
      email: this.formGroup.value.email,
      role: this.formGroup.value.role,
    };
    const values: TeacherProfile = { ...this.data, ...this.formGroup.value };
    values.user = user;
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
