import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Course } from '../../../../model/config/course'; // Import the Course interface
import { CrudService } from '../../../../services/crud.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  formGroup!: FormGroup;
  submitted = false;
  endPoint = "course";

  constructor(private formBuilder: FormBuilder, private service: CrudService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      courseCode: ['', Validators.required],
      courseName: ['', Validators.required],
      description: [''],
      courseMaterials: [''],
      syllabus: ['']
    });
  }

  submitForm() {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    const courseData: Course = this.formGroup.value;
    this.service.save(courseData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }
}
