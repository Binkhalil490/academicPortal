import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileFormComponent } from './teacher-profile-form.component';

describe('TeacherProfileFormComponent', () => {
  let component: TeacherProfileFormComponent;
  let fixture: ComponentFixture<TeacherProfileFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherProfileFormComponent]
    });
    fixture = TestBed.createComponent(TeacherProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
