import { TreatmentService } from './../treatment.service';
import { Component, OnInit } from '@angular/core';
import { Treatment } from '../models/treatment';

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.css']
})
export class TreatmentListComponent implements OnInit {
  treatments: Treatment[] = [];
  title = 'Insulin Tracker';
  display = null;
  treatment = new Treatment();

  reload = function() {
    this.treatmentService
      .index()
      .subscribe(
        data => (this.treatments = data),
        err => console.error('Observer got an error: ' + err)
      );
  };

  displayTreatment = function(treatment: Treatment) {
    console.log('displayTreatment called');
    this.display = treatment;
  };

  displayTable = function () {
    this.display = null;
  };

  addTreatment = function (newTreatment: Treatment) {
    console.log(newTreatment);
    this.treatmentService.create(newTreatment).subscribe(data => this.reload(), err => console.log(err));
    this.newTreatment = new Treatment();
  };

  deleteTreatment = function(tid: number) {
    console.log('deleteTreatment called');
  };

  constructor(private treatmentService: TreatmentService) {}

  ngOnInit() {
    this.reload();
  }
}
