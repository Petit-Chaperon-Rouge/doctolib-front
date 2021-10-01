import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Adresse } from '../model/adresse';

@Injectable({
  providedIn: 'root',
})
export class AdresseService {
  private adressesSubject: BehaviorSubject<Adresse[]> = new BehaviorSubject<
    Adresse[]
  >(<Adresse[]>[]);

  adressesObs: Observable<Adresse[]> = this.adressesSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Retourne la liste des adresses
   * @returns {Observable<Adresse[]>}
   */
  getAdresses(): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(`${environment.url_api}/adresses`);
  }

  refreshAdresses(): void {
    this.http
      .get<Adresse[]>(`${environment.url_api}/adresses`)
      .subscribe((adresses: Adresse[]) => {
        this.adressesSubject.next(adresses);
      });
  }

  /**
   * Crée une adresse
   * @param adresse l'adresse à ajouter
   * @returns {Observable<Adresse>}
   */
  postAdresse(adresses: Adresse): Observable<Adresse> {
    return this.http.post<Adresse>(`${environment.url_api}/adresses`, adresses);
  }

  /**
   * Modifie une adresse
   * @param adresses l' adresse à modifier
   * @returns {Observable<Adresse>}
   */
  putAdresse(adresses: Adresse): Observable<Adresse> {
    return this.http.put<Adresse>(
      `${environment.url_api}/adresses/${adresses.id}`,
      adresses
    );
  }

  /**
   * Supprime une adresse
   * @param adresseId l'id de l'adresse à supprimer
   * @returns {Observable<any>}
   */
  delAdresse(adresseId: number): Observable<any> {
    return this.http.delete(`${environment.url_api}/adresses/${adresseId}`);
  }
}
