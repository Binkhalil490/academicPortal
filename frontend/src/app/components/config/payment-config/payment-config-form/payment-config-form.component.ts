import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PaymentConfig } from 'src/app/model/config/payment-config';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-payment-config-form',
  templateUrl: './payment-config-form.component.html',
  styleUrls: ['./payment-config-form.component.scss']
})
export class PaymentConfigFormComponent implements OnInit{

formGroup!: FormGroup;
  submitted = false;
  endPoint = "paymentConfig";

  constructor(private formBuilder: FormBuilder, private service: CrudService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup= this.formBuilder.group({
          name: [''],
      bookingMoneyPerKatha: [''],
      onePaymentDuration: [''],
      downPaymentDuration: [''],
      downPaymentPercentage: [''],
      delayCharge: [''],
      
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const paymentConfigData: PaymentConfig = { ...this.formGroup.value };
    this.service.save(paymentConfigData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }
}
