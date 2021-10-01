import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Patient } from '../shared/model/patient';
import { PatientService } from '../shared/service/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit, OnDestroy {
  
  patients: Patient[] = [];
  patientsSub?: Subscription;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientsSub = this.patientService.patientsObs.subscribe(
      (patients: Patient[]) => {
        this.patients = patients;
      }
    );
    this.getPatients();
  }

  ngOnDestroy(): void {
    if (this.patientsSub) {
      this.patientsSub.unsubscribe();
    }
  }

  getPatients() {
    this.patientService.refreshPatients();
  }

  deletePatient(id: number) {
    this.patientService.delPatient(id).subscribe((resp) => {
      this.patientService.refreshPatients();
    });
  }

  updatePatient() {}
}
