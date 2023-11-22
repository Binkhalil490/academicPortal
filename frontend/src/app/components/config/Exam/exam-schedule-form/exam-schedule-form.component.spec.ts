import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamScheduleFormComponent } from './exam-schedule-form.component';

describe('ExamScheduleFormComponent', () => {
  let component: ExamScheduleFormComponent;
  let fixture: ComponentFixture<ExamScheduleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamScheduleFormComponent]
    });
    fixture = TestBed.createComponent(ExamScheduleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
