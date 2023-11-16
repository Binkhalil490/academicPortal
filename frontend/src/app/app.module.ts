import { ProjectListComponent } from './components/config/project/project-list/project-list.component';
import { Project } from './model/config/project';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RoleFormComponent } from './components/auth/role/role-form/role-form.component';
import { RoleListComponent } from './components/auth/role/role-list/role-list.component';
import { ClientFormComponent } from './components/config/client/client-form/client-form.component';
import { ClientListComponent } from './components/config/client/client-list/client-list.component';
import { EmployeeFormComponent } from './components/config/employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/config/employee/employee-list/employee-list.component';



import { SettingFormComponent } from './components/config/setting/setting-form/setting-form.component';
import { SettingListComponent } from './components/config/setting/setting-list/setting-list.component';
import { TeamFormComponent } from './components/config/team/team-form/team-form.component';
import { TeamListComponent } from './components/config/team/team-list/team-list.component';
import { AttachmentFormComponent } from './components/data/attachment/attachment-form/attachment-form.component';
import { AttachmentListComponent } from './components/data/attachment/attachment-list/attachment-list.component';
import { AuditTrailFormComponent } from './components/data/audit-trail/audit-trail-form/audit-trail-form.component';
import { AuditTrailListComponent } from './components/data/audit-trail/audit-trail-list/audit-trail-list.component';
import { InventoryFormComponent } from './components/data/inventory/inventory-form/inventory-form.component';
import { InventoryListComponent } from './components/data/inventory/inventory-list/inventory-list.component';
import { NotificationFormComponent } from './components/data/notification/notification-form/notification-form.component';
import { NotificationListComponent } from './components/data/notification/notification-list/notification-list.component';
import { OrderFormComponent } from './components/data/order/order-form/order-form.component';
import { OrderListComponent } from './components/data/order/order-list/order-list.component';
import { PurchaseFormComponent } from './components/data/purchase/purchase-form/purchase-form.component';
import { PurchaseListComponent } from './components/data/purchase/purchase-list/purchase-list.component';
import { ApprovableFormComponent } from './components/super/approvable/approvable-form/approvable-form.component';
import { ApprovableListComponent } from './components/super/approvable/approvable-list/approvable-list.component';
import { AuditAbleFormComponent } from './components/super/audit-able/audit-able-form/audit-able-form.component';
import { AuditAbleListComponent } from './components/super/audit-able/audit-able-list/audit-able-list.component';
import { BaseFormComponent } from './components/super/base/base-form/base-form.component';
import { BaseListComponent } from './components/super/base/base-list/base-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationFormComponent } from './components/config/location/location-form/location-form.component';
import { LocationListComponent } from './components/config/location/location-list/location-list.component';
import { OrganizationFormComponent } from './components/config/organization/organization-form/organization-form.component';
import { OrganizationListComponent } from './components/config/organization/organization-list/organization-list.component';
import { PaymentConfigFormComponent } from './components/config/payment-config/payment-config-form/payment-config-form.component';
import { PaymentConfigListComponent } from './components/config/payment-config/payment-config-list/payment-config-list.component';
import { PaymentMediaFormComponent } from './components/config/payment-media/payment-media-form/payment-media-form.component';
import { PaymentMediaListComponent } from './components/config/payment-media/payment-media-list/payment-media-list.component';
import { PlotFormComponent } from './components/config/plot/plot-form/plot-form.component';
import { PlotListComponent } from './components/config/plot/plot-list/plot-list.component';
import { ProjectFormComponent } from './components/config/project/project-form/project-form.component';
// import { ProjectListComponent } from './components/config/project/project-list/project-list.component';


// import { ScheduleFormComponent } from './components/config/schedule/schedule-form/schedule-form.component';
import { ScheduleListComponent } from './components/config/schedule/schedule-list/schedule-list.component';
import { BranchFormComponent } from './components/config/branch/branch-form/branch-form.component';
import { BranchListComponent } from './components/config/branch/branch-list/branch-list.component';
import { StudentProfileFormComponent } from './components/config/student/student-profile-form/student-profile-form.component';
import { StudentListComponent } from './components/config/student/student-profile-list/student-profile-list.component';
import { AttendanceRecordFormComponent } from './components/config/attendance/attendance-record-form/attendance-record-form.component';
import { AttendanceRecordListComponent } from './components/config/attendance/attendance-record-list/attendance-record-list.component';
import { CourseFormComponent } from './components/config/course/course-form/course-form.component';
import { CourseListComponent } from './components/config/course/course-list/course-list.component';
import { TeacherProfileFormComponent } from './components/config/teacher/teacher-profile-form/teacher-profile-form.component';
// import { TeacherProfileListComponent } from './components/config/teacher/teacher-profile-list/teacher-profile-list.component';
import { AnnouncementFormComponent } from './components/config/announcement/announcement-form/announcement-form.component';
import { AnnouncementListComponent } from './components/config/announcement/announcement-list/announcement-list.component';

import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';  
import { TeacherListComponent } from './components/config/teacher/teacher-profile-list/teacher-profile-list.component';
import { AssignmentFormComponent } from './components/config/assignment/assignment-form/assignment-form.component';
import { AssignmentListComponent } from './components/config/assignment/assignment-list/assignment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RoleFormComponent,
    RoleListComponent,
    ClientFormComponent,
    ClientListComponent,
    EmployeeFormComponent,
    EmployeeListComponent,

    SettingFormComponent,
    SettingListComponent,
    TeamFormComponent,
    TeamListComponent,
    AttachmentFormComponent,
    AttachmentListComponent,
    AuditTrailFormComponent,
    AuditTrailListComponent,
    InventoryFormComponent,
    InventoryListComponent,
    NotificationFormComponent,
    NotificationListComponent,
    OrderFormComponent,
    OrderListComponent,
    PurchaseFormComponent,
    PurchaseListComponent,
    ApprovableFormComponent,
    ApprovableListComponent,
    AuditAbleFormComponent,
    AuditAbleListComponent,
    BaseFormComponent,
    BaseListComponent,
    LocationFormComponent,
    LocationListComponent,
    OrganizationFormComponent,
    OrganizationListComponent,
    PaymentConfigFormComponent,
    PaymentConfigListComponent,
    PaymentMediaFormComponent,
    PaymentMediaListComponent,
    PlotFormComponent,
    PlotListComponent,
    ProjectFormComponent,
    ProjectListComponent,
    // ScheduleFormComponent,
    ScheduleListComponent,
    BranchFormComponent,
    BranchListComponent,
    StudentProfileFormComponent,
    StudentListComponent,
    AttendanceRecordFormComponent,
    AttendanceRecordListComponent,
    CourseFormComponent,
    CourseListComponent,
    TeacherProfileFormComponent,
    TeacherListComponent,
    AnnouncementFormComponent,
    AnnouncementListComponent,
    DashboardComponent,
    AssignmentFormComponent,
    AssignmentListComponent,
   
  



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
