import { TreatmentService } from './../treatment.service';
import { Component, OnInit } from '@angular/core';
import { Treatment } from '../models/treatment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrls: ['./treatment-list.component.css']
})
export class TreatmentListComponent implements OnInit {
  treatments: Treatment[] = [];
  treatment = new Treatment();
  title = 'Insulin Tracker';
  display = null;
  edit = null;

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

  displayTable = function() {
    this.display = null;
  };

  addTreatment = function(newTreatment: Treatment) {
    console.log(newTreatment);
    this.treatmentService
      .create(newTreatment)
      .subscribe(data => this.reload(), err => console.log(err));
    this.newTreatment = new Treatment();
  };

  displayEdit = function() {
    this.edit = Object.assign({}, this.display);
  };

  updateTreatment = function(tid: number, editedTreatment: Treatment) {
    this.treatmentService
      .update(tid, editedTreatment)
      .subscribe(data => this.reload(), err => console.log(err));
    this.edit = null;
    this.display = null;
  };

  deleteTreatment = function (tid: number) {
    console.log('deleteTreatment method called');
    console.log(tid);
    this.treatmentService
      .destroy(tid)
      .subscribe(data => this.reload(), err => console.log(err));
  };

  constructor(
    private treatmentService: TreatmentService
    // private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.reload();
  }
}
