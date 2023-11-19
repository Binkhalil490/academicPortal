import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSubFormComponent } from './assign-sub-form.component';

describe('AssignSubFormComponent', () => {
  let component: AssignSubFormComponent;
  let fixture: ComponentFixture<AssignSubFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignSubFormComponent]
    });
    fixture = TestBed.createComponent(AssignSubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
