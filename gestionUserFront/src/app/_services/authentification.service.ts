import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Utilisateur} from '../_modele/utilisateur';
import {BASE_URL} from '../config/BASE_URL';


@Injectable({ providedIn: 'root' })
export class AuthentificationService {
  private currentUtilisateurSubject: BehaviorSubject<Utilisateur>;
  public currentUtilisateur: Observable<Utilisateur>;

  constructor(private http: HttpClient) {
    this.currentUtilisateurSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('currentUtilisateur')));
    this.currentUtilisateur = this.currentUtilisateurSubject.asObservable();
  }

  public get currentUtilisateurValue(): Utilisateur {
    return this.currentUtilisateurSubject.value;
  }

  login(username: string, password: string) {
    console.log(username);
    console.log(password);
    return this.http.post<any>(`${BASE_URL.api_url}auth/signin`, { username, password })
      .pipe(map(utilisateur => {
        // store utilisateurr details and jwt token in local storage to keep utilisateurr logged in between page refreshes
        localStorage.setItem('currentUtilisateur', JSON.stringify(utilisateur));
        this.currentUtilisateurSubject.next(utilisateur);
        return utilisateur;
      }));
  }

  logout() {
    // remove utilisateurr from local storage to log utilisateurr out
    localStorage.removeItem('currentUtilisateur');
    this.currentUtilisateurSubject.next(null);
  }
}
