import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  username: string;
  email: string;
  password: string;
  passwordAgain: string;

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      data: {
        name: this.username,
        email: this.email,
        password: this.password,
        passwordAgain: this.passwordAgain
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

  toCars(){
    document.getElementById('carList').scrollIntoView({behavior: 'smooth'});
  }

  toHome(){
    document.getElementById('home').scrollIntoView({behavior: 'smooth'});
  }

  toContacts(){
    document.getElementById('contacts').scrollIntoView({behavior: 'smooth'});
  }

}
