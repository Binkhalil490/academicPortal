import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Assignment } from '../../../../model/config/assignment';
import { Course } from '../../../../model/config/course'; // Import the Course interface
import { CrudService } from '../../../../services/crud.service';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.scss']
})
export class AssignmentFormComponent implements OnInit {
  formGroup!: FormGroup;
  submitted = false;
  endPoint = "assignment";

  // Define a list of courses
  availableCourses: Course[] = [];

  constructor(
      private formBuilder: FormBuilder,
      private service: CrudService,
      private http: HttpClient // Inject HttpClient
  ) {}

  ngOnInit() {
    this.createForm();
    this.getCourses(); // Load available courses when the form is initialized
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: [new Date()],
      courseId: ['', Validators.required]
    });
  }

  // Define the getCourses function to fetch courses dynamically
  getCourses() {
    // Make an HTTP GET request to your backend API to fetch courses
    this.http.get<Course[]>('your_backend_api_url/courses').subscribe(
        (courses: Course[]) => {
          this.availableCourses = courses;
        },
        (error) => {
          console.error('Failed to fetch courses:', error);
        }
    );
  }

  submitForm() {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    const assignmentData: Assignment = this.formGroup.value;
    this.service.save(assignmentData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }
}
