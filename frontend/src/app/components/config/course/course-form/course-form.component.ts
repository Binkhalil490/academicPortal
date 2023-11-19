
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { CrudService } from '../../../../services/crud.service';
import { populateFormControl } from '../../../../utils/object.util';
import { NotificationUtil } from '../../../../utils/notification.util';
import { OperationStatus } from 'src/app/constants/status.enum';
import { Course } from 'src/app/model/config/course';  // Replace with the actual path

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  formGroup!: FormGroup;
  submitted = false;
  endPoint = "course";
  data: any = {};

  constructor(private formBuilder: FormBuilder, private service: CrudService, private noticeUtil: NotificationUtil) { }

  ngOnInit() {
    this.createForm();
    this.data = this.service.data;
    if (this.data.id) {
      this.formGroup.patchValue(this.data);
    }
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      courseCode: ['', Validators.required],
      courseName: ['', Validators.required],
      description: ['', Validators.required],
      courseMaterials: ['', Validators.required],
      syllabus: ['', Validators.required],
      taughtCourses: this.formBuilder.array([]), // Add form array for taught courses
      message: ['']
    });
  }
  get taughtCourses() {
    return (this.formGroup.get('taughtCourses') as FormArray).controls;
  }
  // Add a method to add taught course form controls dynamically
  addTaughtCourse() {
    const taughtCoursesFormArray = this.formGroup.get('taughtCourses') as FormArray;
    taughtCoursesFormArray.push(this.createTaughtCourseForm());
  }

  // Add a method to create a form group for a taught course
  createTaughtCourseForm(): FormGroup {
    return this.formBuilder.group({
      // Add form controls for taught course properties
      // Example:
      teacherName: ['', Validators.required],
      schedule: ['', Validators.required],
      // Add other properties as needed
    });
  }

  // Add a method to remove a taught course form control
  removeTaughtCourse(index: number) {
    const taughtCoursesFormArray = this.formGroup.get('taughtCourses') as FormArray;
    taughtCoursesFormArray.removeAt(index);
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }

    const values: Course = { ...this.data, ...this.formGroup.value };
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








// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { CrudService } from '../../../../services/crud.service';
// import { populateFormControl } from '../../../../utils/object.util';
// import { NotificationUtil } from '../../../../utils/notification.util';
// import { OperationStatus } from 'src/app/constants/status.enum';
// import { Course } from 'src/app/model/config/course';  // Replace with the actual path

// @Component({
//   selector: 'app-course-form',
//   templateUrl: './course-form.component.html',
//   styleUrls: ['./course-form.component.scss']
// })
// export class CourseFormComponent implements OnInit {
//   formGroup!: FormGroup;
//   submitted = false;
//   endPoint = "course";
//   data: any = {};

//   constructor(private formBuilder: FormBuilder, private service: CrudService, private noticeUtil: NotificationUtil) { }

//   ngOnInit() {
//     this.createForm();
//     this.data = this.service.data;
//     if (this.data.id) {
//       this.formGroup.patchValue(this.data);
//     }
//   }

//   createForm() {
//     this.formGroup = this.formBuilder.group({
//       courseCode: ['', Validators.required],
//       courseName: ['', Validators.required],
//       description: ['', Validators.required],
//       courseMaterials: ['', Validators.required],
//       syllabus: ['', Validators.required],
//       message: ['']
//     });
//   }

//   submitForm() {
//     this.submitted = true;
//     if (this.formGroup.invalid) {
//       return;
//     }

//     const values: Course = { ...this.data, ...this.formGroup.value };
//     this.service.save(values, this.endPoint).subscribe(response => {
//       this.formGroup.reset();
//       this.submitted = false;
//       this.noticeUtil.showResponseMessage(response);
//     },
//     (error: Error) => {
//       const res = { status: OperationStatus.FAILURE, message: "Server error! Please contact the support team." };
//       this.noticeUtil.showResponseMessage(res);
//       console.log(this.endPoint, error);
//     });
//   }
// }
