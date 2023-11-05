// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-product-form',
//   templateUrl: './product-form.component.html',
//   styleUrls: ['./product-form.component.scss']
// })
// export class ProductFormComponent implements OnInit{

formGroup!: FormGroup;
//   submitted = false;
//   endPoint = "customer";

//   constructor(private formBuilder: FormBuilder, private service: DataService) { }

//   ngOnInit() {
//     this.createForm();
//   }

//   createForm() {
//     this.formGroup= this.formBuilder.group({
//       firstName: [''],
//       lastName: [''],
//       email: [''],
//       phone: [''],
//       address: [''],
//       billingAddress: [''],
//       companyName: [''],
//       tin: [''],
//       dateOfRegistration: [''],
//       customerCategory: [''],
//       creditLimit: [''],
//     });
//   }

//   submitForm() {
//     this.submitted = true;
//     if (this.formGroup.invalid) {
//       return;
//     }
//     const customerData: Customer = { ...this.formGroup.value };
//     this.service.save(customerData, this.endPoint).subscribe(response => {
//       this.formGroup.reset();
//       this.submitted = false;
//     });
//   }
// }
