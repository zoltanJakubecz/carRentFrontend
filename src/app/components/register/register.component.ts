import {Component} from '@angular/core';
import {RegisterDialogComponent} from '../register-dialog/register-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent{


  constructor( public dialog: MatDialog, private userService: UserService) {}

  openDialog(){
    const dialogRef = this.dialog.open( RegisterDialogComponent, {
      data: {
        id: 1,
        title: 'Registration Form'
      },
      disableClose: true,
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          console.log('Dialog output:', data);
          this.userService.register({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            passwordPlain: data.passwordPlain,
            passwordPlainCheck: data.passwordPlainCheck
          }).subscribe();
        }
      }
    );
  }
}
