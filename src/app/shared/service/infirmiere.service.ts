import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Infirmiere } from '../model/infirmiere';

@Injectable({
  providedIn: 'root',
})
export class InfirmiereService {
  private infirmieresSubject: BehaviorSubject<Infirmiere[]> =
    new BehaviorSubject<Infirmiere[]>(<Infirmiere[]>[]);

  infirmieresObs: Observable<Infirmiere[]> =
    this.infirmieresSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Retourne la liste des infirmieres
   * @returns {Observable<Infirmiere[]>}
   */
  getInfirmieres(): Observable<Infirmiere[]> {
    return this.http.get<Infirmiere[]>(`${environment.url_api}/infirmieres`);
  }

  refreshInfirmieres(): void {
    this.http
      .get<Infirmiere[]>(`${environment.url_api}/infirmieres`)
      .subscribe((infirmieres: Infirmiere[]) => {
        this.infirmieresSubject.next(infirmieres);
      });
  }

  /**
   * Crée une infirmiere
   * @param infirmiere l'infirmiere à ajouter
   * @returns {Observable<Infirmiere>}
   */
  postInfirmiere(infirmieres: Infirmiere): Observable<Infirmiere> {
    return this.http.post<Infirmiere>(
      `${environment.url_api}/infirmieres`,
      infirmieres
    );
  }

  /**
   * Modifie une infirmiere
   * @param infirmieres l'infirmiere à modifier
   * @returns {Observable<Infirmiere>}
   */
  putInfirmiere(infirmieres: Infirmiere): Observable<Infirmiere> {
    return this.http.put<Infirmiere>(
      `${environment.url_api}/infirmieres/${infirmieres.id}`,
      infirmieres
    );
  }

  /**
   * Supprime une infirmiere
   * @param infirmiereId l'id de l'infirmiere à supprimer
   * @returns {Observable<any>}
   */
  delInfirmiere(infirmiereId: number): Observable<any> {
    return this.http.delete(
      `${environment.url_api}/infirmieres/${infirmiereId}`
    );
  }
}
