import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Team } from 'src/app/model/config/team-model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent  implements OnInit{
formGroup!: FormGroup;
  submitted = false;
  endPoint = "team";

  constructor(private formBuilder: FormBuilder, private service: CrudService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup= this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      address: [''],
      billingAddress: [''],
      companyName: [''],
      tin: [''],
      dateOfRegistration: [''],
      teamCategory: [''],
      creditLimit: [''],
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const teamData: Team = { ...this.formGroup.value };
    this.service.save(teamData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }
}
