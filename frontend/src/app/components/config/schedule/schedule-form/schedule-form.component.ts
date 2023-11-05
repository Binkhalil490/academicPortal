// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
// import { Schedule } from 'src/app/model/config/schedule';
// import { DataService } from 'src/app/services/data.service';

// @Component({
//   selector: 'app-schedule-form',
//   templateUrl: './schedule-form.component.html',
//   styleUrls: ['./schedule-form.component.scss']
// })
// export class ScheduleFormComponent implements OnInit{

formGroup!: FormGroup;
//   submitted = false;
//   endPoint = "schedule";

//   constructor(private formBuilder: FormBuilder, private service: DataService) { }

//   ngOnInit() {
//     this.createForm();
//   }

//   createForm() {
//     this.formGroup= this.formBuilder.group({
//       firstName: [''],
//       lastName: [''],
//       email: [''],
//       phone: [''],
//       address: [''],
//       billingAddress: [''],
//       companyName: [''],
//       tin: [''],
//       dateOfRegistration: [''],
//       scheduleCategory: [''],
//       creditLimit: [''],
//     });
//   }

//   submitForm() {
//     this.submitted = true;
//     if (this.formGroup.invalid) {
//       return;
//     }
//     const scheduleData: Schedule = { ...this.formGroup.value };
//     this.service.save(scheduleData, this.endPoint).subscribe(response => {
//       this.formGroup.reset();
//       this.submitted = false;
//     });
//   }
// }
