import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PaymentMedia } from 'src/app/model/config/payment-media';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-payment-media-form',
  templateUrl: './payment-media-form.component.html',
  styleUrls: ['./payment-media-form.component.scss']
})
export class PaymentMediaFormComponent implements OnInit{

formGroup!: FormGroup;
  submitted = false;
  endPoint = "paymentMedia";

  constructor(private formBuilder: FormBuilder, private service: CrudService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup= this.formBuilder.group({
      name: [''],
      
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const paymentMediaData: PaymentMedia = { ...this.formGroup.value };
    this.service.save(paymentMediaData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }
}
