import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceRecordFormComponent } from './attendance-record-form.component';

describe('AttendanceRecordFormComponent', () => {
  let component: AttendanceRecordFormComponent;
  let fixture: ComponentFixture<AttendanceRecordFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceRecordFormComponent]
    });
    fixture = TestBed.createComponent(AttendanceRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
