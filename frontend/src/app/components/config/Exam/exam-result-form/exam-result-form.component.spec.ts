import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamResultFormComponent } from './exam-result-form.component';

describe('ExamResultFormComponent', () => {
  let component: ExamResultFormComponent;
  let fixture: ComponentFixture<ExamResultFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamResultFormComponent]
    });
    fixture = TestBed.createComponent(ExamResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
