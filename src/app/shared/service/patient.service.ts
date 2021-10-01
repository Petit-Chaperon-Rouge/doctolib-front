import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private patientsSubject: BehaviorSubject<Patient[]> = new BehaviorSubject<
    Patient[]
  >(<Patient[]>[]);

  patientsObs: Observable<Patient[]> = this.patientsSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Retourne la liste des patients
   * @returns {Observable<Patient[]>}
   */
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.url_api}/patients`);
  }

  refreshPatients(): void {
    this.http
      .get<Patient[]>(`${environment.url_api}/patients`)
      .subscribe((patients: Patient[]) => {
        this.patientsSubject.next(patients);
      });
  }

  /**
   * Crée un patient
   * @param patient le patient à ajouter
   * @returns {Observable<Patient>}
   */
  postPatient(patients: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${environment.url_api}/patients`, patients);
  }

  /**
   * Modifie un patient
   * @param patients le patient à modifier
   * @returns {Observable<Patient>}
   */
  putPatient(patients: Patient): Observable<Patient> {
    return this.http.put<Patient>(
      `${environment.url_api}/patients/${patients.id}`,
      patients
    );
  }

  /**
   * Supprime un patient
   * @param patientId l'id du patient à supprimer
   * @returns {Observable<any>}
   */
  delPatient(patientId: number): Observable<any> {
    return this.http.delete(`${environment.url_api}/patients/${patientId}`);
  }
}
