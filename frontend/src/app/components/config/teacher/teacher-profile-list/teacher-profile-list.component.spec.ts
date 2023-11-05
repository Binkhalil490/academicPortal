import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileListComponent } from './teacher-profile-list.component';

describe('TeacherProfileListComponent', () => {
  let component: TeacherProfileListComponent;
  let fixture: ComponentFixture<TeacherProfileListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherProfileListComponent]
    });
    fixture = TestBed.createComponent(TeacherProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
