import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherProfile } from '../../../../model/config/teacher-profile'; // Import the TeacherProfile interface
import { CrudService } from '../../../../services/crud.service';

@Component({
  selector: 'app-teacher-profile-form',
  templateUrl: './teacher-profile-form.component.html',
  styleUrls: ['./teacher-profile-form.component.scss']
})
export class TeacherProfileFormComponent implements OnInit {
  formGroup!: FormGroup;
  submitted = false;
  endPoint = "teacher-profile";

  constructor(private formBuilder: FormBuilder, private service: CrudService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: [''],
      educationalBackground: ['']
    });
  }

  submitForm() {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    const teacherProfileData: TeacherProfile = this.formGroup.value;
    this.service.save(teacherProfileData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }
}
