import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ConnexionComponent} from "../connexion/connexion.component";



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/admin/admin.module')
      .then(mod => mod.AdminModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module')
      .then(mod => mod.AdminModule)
  },

  {
    path: 'connexion',
    component: ConnexionComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
