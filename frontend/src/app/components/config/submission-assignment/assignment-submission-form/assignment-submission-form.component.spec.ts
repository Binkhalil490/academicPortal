import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSubmissionFormComponent } from './assignment-submission-form.component';

describe('AssignmentSubmissionFormComponent', () => {
  let component: AssignmentSubmissionFormComponent;
  let fixture: ComponentFixture<AssignmentSubmissionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentSubmissionFormComponent]
    });
    fixture = TestBed.createComponent(AssignmentSubmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
