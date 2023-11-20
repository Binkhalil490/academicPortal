
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProfileFormComponent } from './components/config/student/student-profile-form/student-profile-form.component';
import { TeacherProfileFormComponent } from './components/config/teacher/teacher-profile-form/teacher-profile-form.component';
import { StudentListComponent } from './components/config/student/student-profile-list/student-profile-list.component';
import { CourseFormComponent } from './components/config/course/course-form/course-form.component';
import { CourseListComponent } from './components/config/course/course-list/course-list.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { TeacherListComponent } from './components/config/teacher/teacher-profile-list/teacher-profile-list.component';
import { AssignmentFormComponent } from './components/config/assignment/assignment-form/assignment-form.component';
import { AssignSubFormComponent } from './components/config/assignment_submission/assign-sub-form/assign-sub-form.component';
import { CourseEnrollmentComponent } from './components/config/course/course-enrollment/course-enrollment.component';
import { AttendanceRecordFormComponent } from './components/config/attendance/attendance-record-form/attendance-record-form.component';
import { AttendanceRecordListComponent } from './components/config/attendance/attendance-record-list/attendance-record-list.component';
import { canActivate, canActivateChild } from './services/auth/auth-guard';
import { LoginComponent } from './components/login-page/login/login.component';

const routes: Routes = [
  

  {
    path: '', component: DashboardComponent,
    canActivate: [canActivate],
    canActivateChild: [canActivateChild],
    children: [
      // {path: '', component: RoleFormComponent},
      // {path: 'list', component: RoleListComponent},
      {path: 'student-form', component: StudentProfileFormComponent},
      {path: 'teacher-form', component: TeacherProfileFormComponent},
      {path: 'student-list', component: StudentListComponent},
      {path: 'teacher-list', component: TeacherListComponent},
      {path: 'course-form', component: CourseFormComponent},
      {path: 'course-list', component: CourseListComponent},
      {path: 'course-enrollment', component: CourseEnrollmentComponent},
      {path: 'assignment-form', component: AssignmentFormComponent},
      {path: 'assignment-list', component: AssignmentFormComponent},
      {path: 'assignment-sub-form', component: AssignSubFormComponent},
      {path: 'assignment-sub-list', component: AssignmentFormComponent},
      {path: 'attendance-record-form', component: AttendanceRecordFormComponent},
      {path: 'attendance-record-list', component: AttendanceRecordListComponent},


    ]
  },
  
  {
    path: 'login', component: LoginComponent
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
