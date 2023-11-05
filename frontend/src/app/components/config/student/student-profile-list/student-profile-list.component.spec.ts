import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileListComponent } from './student-profile-list.component';

describe('StudentProfileListComponent', () => {
  let component: StudentProfileListComponent;
  let fixture: ComponentFixture<StudentProfileListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentProfileListComponent]
    });
    fixture = TestBed.createComponent(StudentProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
