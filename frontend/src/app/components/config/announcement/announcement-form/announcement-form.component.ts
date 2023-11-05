import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Announcement } from '../../../../model/config/announcement'; // Import the Announcement interface
import { CrudService } from '../../../../services/crud.service';

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.scss']
})
export class AnnouncementFormComponent implements OnInit {
  formGroup!: FormGroup;
  submitted = false;
  endPoint = "announcement";

  constructor(private formBuilder: FormBuilder, private service: CrudService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      datePosted: [new Date()] // You can initialize it with the current date or change as needed
    });
  }

  submitForm() {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    const announcementData: Announcement = this.formGroup.value;
    this.service.save(announcementData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }
}
