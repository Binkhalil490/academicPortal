import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent {
formGroup!: FormGroup;
  submitted = false;
  endPoint = "location";

  constructor(private formBuilder: FormBuilder, private service: CrudService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup= this.formBuilder.group({
      house: [''],
      street: [''],
      villageOrCity: [''],
      thana: [''],
      upazila: [''],
      district: [''],
      postalCode: [''],
      
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const locationData: Location = { ...this.formGroup.value };
    this.service.save(locationData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }
}
