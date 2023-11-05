import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Client } from 'src/app/model/config/client';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

formGroup!: FormGroup;
  submitted = false;
  endPoint = "client";

  constructor(private formBuilder: FormBuilder, private service: CrudService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup= this.formBuilder.group({
      source: [''],
      clientId: [''],
      name: [''],
      fatherOrHusbandName: [''],
      motherName: [''],
      company: [''],
      designation: [''],
      profession: [''],
      age: [''],
      residentialHouse: [''],
      district: [''],
      phone: [''],
      currentAddress: [''],
      permanentAddress: [''],
      email: [''],
      dateOfBirth: [''],
      nationality: [''],
      nid: [''],
      tinNo: [''],
      religion: [''],
      maritalStatus: [''],
      nomineeName: [''],
      nomineeRelation: [''],
      nomineeAddress: [''],
      nomineeNid: [''],
      nomineePhone: [''],

    });
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const clientData: Client = { ...this.formGroup.value };
    this.service.save(clientData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }

}
