import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileFormComponent } from './student-profile-form.component';

describe('StudentProfileFormComponent', () => {
  let component: StudentProfileFormComponent;
  let fixture: ComponentFixture<StudentProfileFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentProfileFormComponent]
    });
    fixture = TestBed.createComponent(StudentProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
