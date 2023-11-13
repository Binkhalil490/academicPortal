import { PaymentMediaFormComponent } from './components/config/payment-media/payment-media-form/payment-media-form.component';
import { EmployeeFormComponent } from './components/config/employee/employee-form/employee-form.component';
import { ClientFormComponent } from './components/config/client/client-form/client-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleFormComponent } from './components/auth/role/role-form/role-form.component';
import { RoleListComponent } from './components/auth/role/role-list/role-list.component';
import { ClientListComponent } from './components/config/client/client-list/client-list.component';
import { EmployeeListComponent } from './components/config/employee/employee-list/employee-list.component';
import { LocationFormComponent } from './components/config/location/location-form/location-form.component';
import { LocationListComponent } from './components/config/location/location-list/location-list.component';
import { OrganizationFormComponent } from './components/config/organization/organization-form/organization-form.component';
import { OrganizationListComponent } from './components/config/organization/organization-list/organization-list.component';
import { PaymentConfigFormComponent } from './components/config/payment-config/payment-config-form/payment-config-form.component';
import { PaymentConfigListComponent } from './components/config/payment-config/payment-config-list/payment-config-list.component';
import { PaymentMediaListComponent } from './components/config/payment-media/payment-media-list/payment-media-list.component';
import { PlotFormComponent } from './components/config/plot/plot-form/plot-form.component';
import { PlotListComponent } from './components/config/plot/plot-list/plot-list.component';
import { BranchFormComponent } from './components/config/branch/branch-form/branch-form.component';
import { BranchListComponent } from './components/config/branch/branch-list/branch-list.component';
import { StudentProfileFormComponent } from './components/config/student/student-profile-form/student-profile-form.component';
import { TeacherProfileFormComponent } from './components/config/teacher/teacher-profile-form/teacher-profile-form.component';
import { StudentListComponent } from './components/config/student/student-profile-list/student-profile-list.component';
import { TeacherProfileListComponent } from './components/config/teacher/teacher-profile-list/teacher-profile-list.component';
import { CourseFormComponent } from './components/config/course/course-form/course-form.component';
import { CourseListComponent } from './components/config/course/course-list/course-list.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';

const routes: Routes = [

  {
    path: '', component: DashboardComponent,
    children: [
      // {path: '', component: RoleFormComponent},
      // {path: 'list', component: RoleListComponent},
      {path: 'student-form', component: StudentProfileFormComponent},
      {path: 'teacher-form', component: TeacherProfileFormComponent},
      {path: 'student-list', component: StudentListComponent},
      {path: 'teacher-list', component: TeacherProfileListComponent},
      {path: 'course-form', component: CourseFormComponent},
      {path: 'course-list', component: CourseListComponent},
    ]
  }
  






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
