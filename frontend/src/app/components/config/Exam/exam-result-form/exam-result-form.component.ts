// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { CrudService } from '../../../../services/crud.service';
// import { NotificationUtil } from '../../../../utils/notification.util';
// import { OperationStatus } from 'src/app/constants/status.enum';
// import { populateFormControl } from 'src/app/utils/object.util';
// import { StudentProfile } from 'src/app/model/config/student-profile';
// import { ExamSchedule } from 'src/app/model/config/examSchedule';
// import { AppResponse } from 'src/app/dto/response.dto';
// import { Page } from 'src/app/dto/page.dto';
// import { Course } from 'src/app/model/config/course';

// @Component({
//   selector: 'exam-result-form',
//   templateUrl: './exam-result-form.component.html',
//   styleUrls: ['./exam-result-form.component.scss'],
// })
// export class ExamResultFormComponent implements OnInit {
//   formGroup!: FormGroup;
//   controls: any = {
//     "id": new FormControl('', []),
//     "courseName": new FormControl('', []),
//     "courseCode": new FormControl('', []),
//     "examDetails": new FormControl('', []),
//     "examDate": new FormControl('', []),
//     "courses": new FormControl([], []),
//   };
//   submitted = false;
//   endPoint = "examSchedule";
//   data: any = {};
//   students : StudentProfile[] = [];
//   examSchedules : ExamSchedule[] = [];

//   constructor(private formBuilder: FormBuilder, private service: CrudService, private noticeUtil: NotificationUtil) { }

//   ngOnInit() {
   
//     this.createForm();
//     this.data = this.service.data;
//     if (this.data.id) {
//       populateFormControl(this.formGroup.controls, this.data);
//     }
//     this.service.getList("course", 0, 10000).subscribe((res: AppResponse) =>{
//         const page: Page = res.data;
//         this.students = page.content;
//         this.examSchedules = page.content;
//     }) 
      
    
//   }

//   createForm() {
//     this.formGroup = this.formBuilder.group(this.controls);
//   }

//   submitForm() {
//     this.submitted = true;
//     if (this.formGroup.invalid) {
//       return;
//     }

//     const courseList: Course[] = this.formGroup.value.courses.map((courseId: number) => {
//       return { id: courseId };
//     });

//     // const values: ExamSchedule = {
//     //   ...this.data,
//     //   ...this.formGroup.value,
//     //   courses: courseList,

//     // };

//     const values: ExamSchedule ={
//       ...this.data,
//       ...this.formGroup.value,
//       courses:{id: this.formGroup.value.course},


//     }


//     this.service.save(values, this.endPoint).subscribe(response => {
//       this.formGroup.reset();
//       this.submitted = false;
//       this.noticeUtil.showResponseMessage(response);
//     },
//       (error: Error) => {
//         const res = { status: OperationStatus.FAILURE, message: "Server error! Please contact the support team." };
//         this.noticeUtil.showResponseMessage(res);
//         console.log(this.endPoint, error);
//       });
//   }
// }
