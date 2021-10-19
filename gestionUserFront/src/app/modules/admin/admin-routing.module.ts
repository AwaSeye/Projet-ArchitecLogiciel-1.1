import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilAdministrateurComponent} from './accueil-administrateur/accueil-administrateur.component';
import {AuthGuard} from "../../_helper/auth.guard";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";

const routes: Routes = [
  {path: '' , component: AccueilAdministrateurComponent, canActivate: [AuthGuard]},
  {path: 'utilisateur', component: UtilisateurComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
