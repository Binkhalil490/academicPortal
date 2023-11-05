import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMediaListComponent } from './payment-media-list.component';

describe('PaymentMediaListComponent', () => {
  let component: PaymentMediaListComponent;
  let fixture: ComponentFixture<PaymentMediaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentMediaListComponent]
    });
    fixture = TestBed.createComponent(PaymentMediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
