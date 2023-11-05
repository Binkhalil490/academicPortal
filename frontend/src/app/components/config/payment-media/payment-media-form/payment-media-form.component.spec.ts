import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMediaFormComponent } from './payment-media-form.component';

describe('PaymentMediaFormComponent', () => {
  let component: PaymentMediaFormComponent;
  let fixture: ComponentFixture<PaymentMediaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentMediaFormComponent]
    });
    fixture = TestBed.createComponent(PaymentMediaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
