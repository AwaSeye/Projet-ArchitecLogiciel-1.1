import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../../../_services/api.service';
import {Utilisateur} from "../../../_modele/utilisateur";
import {ModalUtilisateurComponent} from "../modal-utilisateur/modal-utilisateur.component";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'prenom', 'username', 'password', 'email', 'action'];
  source: MatTableDataSource<any>;
  dialogValue: Utilisateur;
  helf = this;
  constructor(
    private dialog: MatDialog,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.source = new MatTableDataSource<any>([]);
    this.apiService.getAllData('utilisateur')
      .subscribe(
        response => {
          this.source = new MatTableDataSource<any>(response)
        },
        error1 => {
          console.log(error1);
        }
      );
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.source.filter = filterValue.trim().toLowerCase();

    if (this.source.paginator) {
      this.source.paginator.firstPage();
    }
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = new Utilisateur();

    const dialogRef = this.dialog.open( ModalUtilisateurComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined){
        return;
      }
      console.log('The dialog was closed', result);

      this.dialogValue = result;
      this.apiService.saveData('utilisateur', this.dialogValue)
        .subscribe(
          response => {
            this.apiService.getAllData('utilisateur')
              .subscribe(
                response => {
                  this.source = new MatTableDataSource<any>(response)
                },
                error1 => {
                  console.log(error1);
                }
              );
          },
          error1 => {
            console.log(error1);
          }
        )

    });
  }
  openDialogModif(utilisateur: Utilisateur) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = utilisateur;

    const dialogRef = this.dialog.open( ModalUtilisateurComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result;
      this.apiService.updateData('utilisateur/modifier', result)
        .subscribe(
          response => {
            console.log(response)
            this.apiService.getAllData('utilisateur')
              .subscribe(
                response => {
                  this.source = new MatTableDataSource<any>(response)
                },
                error1 => {
                  console.log(error1);
                }
              );
          },
          error1 => {
            console.log(error1)
          }
        )

    });
  }

  deleteUser(user: Utilisateur){
    this.apiService.deleteData('utilisateur/' + user.id).subscribe(
      response=> {
        this.apiService.getAllData('utilisateur')
          .subscribe(
            response => {
              this.source = new MatTableDataSource<any>(response)
            },
            error1 => {
              console.log(error1);
            }
          );
      }
    )
  }
}
