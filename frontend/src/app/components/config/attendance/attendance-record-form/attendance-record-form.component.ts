import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AttendanceRecord } from '../../../../model/config/attendance-record'; // Import the AttendanceRecord interface
import { CrudService } from '../../../../services/crud.service';

@Component({
  selector: 'app-attendance-record-form',
  templateUrl: './attendance-record-form.component.html',
  styleUrls: ['./attendance-record-form.component.scss']
})
export class AttendanceRecordFormComponent implements OnInit {
  formGroup!: FormGroup;
  submitted = false;
  endPoint = "attendance-record";

  constructor(private formBuilder: FormBuilder, private service: CrudService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      student: ['', Validators.required],
      course: ['', Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  submitForm() {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    const attendanceRecordData: AttendanceRecord = this.formGroup.value;
    this.service.save(attendanceRecordData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }
}
