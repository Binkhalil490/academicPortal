import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Organization } from 'src/app/model/config/organization';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent implements OnInit{

formGroup!: FormGroup;
  submitted = false;
  endPoint = "organization";

  constructor(private formBuilder: FormBuilder, private service: CrudService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup= this.formBuilder.group({
          name: [''],
      address: [''],
      email: [''],
      contactNo: [''],
      
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const organizationData: Organization = { ...this.formGroup.value };
    this.service.save(organizationData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }
}
