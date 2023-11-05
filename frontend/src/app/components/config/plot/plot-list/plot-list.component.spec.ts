import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotListComponent } from './plot-list.component';

describe('PlotListComponent', () => {
  let component: PlotListComponent;
  let fixture: ComponentFixture<PlotListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlotListComponent]
    });
    fixture = TestBed.createComponent(PlotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
