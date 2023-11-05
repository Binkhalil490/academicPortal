import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Plot } from 'src/app/model/config/plot';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-plot-form',
  templateUrl: './plot-form.component.html',
  styleUrls: ['./plot-form.component.scss']
})
export class PlotFormComponent implements OnInit{
  
formGroup!: FormGroup;
  submitted = false;
  endPoint = "plot";

  constructor(private formBuilder: FormBuilder, private service: CrudService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup= this.formBuilder.group({
      project: [''],
      plotNo: [''],
      roadNo: [''],
      sectorNo: [''],
      ratePerKatha: [''],
      block: [''],
      areaInKatha: [''],
      facing: [''],
      totalPrice: [''],
      totalPriceInWords: [''],
      
      
    });
  }

  submitForm() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const plotData: Plot = { ...this.formGroup.value };
    this.service.save(plotData, this.endPoint).subscribe(response => {
      this.formGroup.reset();
      this.submitted = false;
    });
  }
}
