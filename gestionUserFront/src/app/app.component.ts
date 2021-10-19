import { Component } from '@angular/core';
import {Utilisateur} from "./_modele/utilisateur";
import {Router} from "@angular/router";
import {AuthentificationService} from "./_services/authentification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionUtilisateurs';
  currentUser: Utilisateur;

  constructor(
    private router: Router,
    private authenticationService: AuthentificationService
  ) {
    this.authenticationService.currentUtilisateur.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


}
