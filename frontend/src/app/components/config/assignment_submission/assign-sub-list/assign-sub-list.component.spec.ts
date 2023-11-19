import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSubListComponent } from './assign-sub-list.component';

describe('AssignSubListComponent', () => {
  let component: AssignSubListComponent;
  let fixture: ComponentFixture<AssignSubListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignSubListComponent]
    });
    fixture = TestBed.createComponent(AssignSubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
