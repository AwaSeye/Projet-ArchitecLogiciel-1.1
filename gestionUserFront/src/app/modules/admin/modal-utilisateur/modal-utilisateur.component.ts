import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../../_services/api.service';
import {error} from 'selenium-webdriver';
import {Utilisateur} from "../../../_modele/utilisateur";

@Component({
  selector: 'modalUtilisateur',
  templateUrl: './modal-utilisateur.component.html',
  styleUrls: ['./modal-utilisateur.component.css']
})

export class ModalUtilisateurComponent implements OnInit{
  utilisateurFormGroup: FormGroup;
  formValue: Utilisateur;
  url = 'utilisateur';
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<ModalUtilisateurComponent>,
    @Inject(MAT_DIALOG_DATA) data,
  ){
    this.formValue = data;
  }
  ngOnInit(): void {
    this.utilisateurFormGroup = this.fb.group({
      id: [this.formValue.id],
      nom: [this.formValue.nom, Validators.required],
      prenom: [this.formValue.prenom, Validators.required],
      username: [this.formValue.username, Validators.required],
      password: [this.formValue.password, Validators.required],
      email: [this.formValue.email, Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.utilisateurFormGroup.valid){
      // this.apiService.saveData('utilisateur',this.utilisateurFormGroup.value).subscribe((result:any)=>{
      //   this.close()
      // })
      this.dialogRef.close(this.utilisateurFormGroup.value);

    }

  }
}
