import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AccueilAdministrateurComponent} from './accueil-administrateur/accueil-administrateur.component';
import {AdminComponent} from './admin.component';
import {SharedModule} from '../../shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {ModalUtilisateurComponent} from "./modal-utilisateur/modal-utilisateur.component";
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [
    AccueilAdministrateurComponent,
    AdminComponent,
    UtilisateurComponent,
    ModalUtilisateurComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    AccueilAdministrateurComponent,
    AdminComponent,
    UtilisateurComponent,
    ModalUtilisateurComponent
  ],
})
export class AdminModule { }
