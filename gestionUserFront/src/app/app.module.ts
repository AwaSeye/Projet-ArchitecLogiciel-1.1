import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthentificationService} from './_services/authentification.service';
import {ApiService} from './_services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {fakeBackendProvider} from "./_helper/fake-backend";
import {ErrorInterceptor} from "./_helper/error.interceptor";
import {JwtInterceptor} from "./_helper/jwt.interceptor";
import {Route, UrlSegment} from "@angular/router";
import {AuthGuard} from "./_helper/auth.guard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatStepperModule} from "@angular/material/stepper";
import {ConnexionComponent} from "../connexion/connexion.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent

  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatStepperModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


   // provider used to create fake backend
    AuthentificationService,
    ApiService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
