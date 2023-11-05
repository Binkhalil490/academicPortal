import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfigFormComponent } from './payment-config-form.component';

describe('PaymentConfigFormComponent', () => {
  let component: PaymentConfigFormComponent;
  let fixture: ComponentFixture<PaymentConfigFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentConfigFormComponent]
    });
    fixture = TestBed.createComponent(PaymentConfigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
