import {Component} from '@angular/core';
import {RegisterDialogComponent} from '../register-dialog/register-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent{

  constructor( public dialog: MatDialog, private userService: UserService ) {}

  openDialog(){
    console.log('Helly');
    const dialogRef = this.dialog.open( RegisterDialogComponent, {
      data: {
        firstName: '',
        email: '',
        passwordPlain: '',
        passwordPlainCheck: ''
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.userService.register({
          firstName: result.name,
          email: result.email,
          passwordPlain: result.password,
          passwordPlainCheck: result.passwordAgain
        }).subscribe();
        console.log(`helly ${result}`);
      }
      console.log(result);
    });
  }
}
