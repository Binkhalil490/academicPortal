import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssignmentSubmission } from '../../../../model/config/assignment-submission';
import { Assignment } from '../../../../model/config/assignment';
import { StudentProfile } from '../../../../model/config/student-profile';
import { CrudService } from '../../../../services/crud.service';

@Component({
  selector: 'app-assignment-submission-form',
  templateUrl: './assignment-submission-form.component.html',
  styleUrls: ['./assignment-submission-form.component.scss']
})
export class AssignmentSubmissionFormComponent implements OnInit {
  formGroup!: FormGroup;
  submitted = false;
  endPoint = "assignment-submission";

  availableAssignments: Assignment[] = []; // Populate with available assignments
  availableStudents: StudentProfile[] = []; // Populate with available students

  constructor(
    private formBuilder: FormBuilder,
    private service: CrudService
  ) { }

  ngOnInit() {
    this.createForm();
    // Fetch and populate available assignments and students here
    // For demonstration, you can populate them with dummy data.
    this.availableAssignments = [
      { id: 1, title: 'Assignment 1', description: 'Description 1', dueDate: new Date() },
      { id: 2, title: 'Assignment 2', description: 'Description 2', dueDate: new Date() },
    ];
    this.availableStudents = [
      { id: 1, firstName: 'John', lastName: 'Doe', contactNumber: '1234567890' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', contactNumber: '9876543210' },
    ];
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      assignmentId: ['', Validators.required],
      studentId: ['', Validators.required],
      submissionContent: ['', Validators.required],
      submissionDate: [new Date()],
      grade: ['']
    });
  }

  submitForm() {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    const submissionData: AssignmentSubmission = this.formGroup.value;
    this.service.save(submissionData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }
}
