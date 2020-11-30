import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;
  password: string;
  passwordAgain: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        name: this.username,
        password: this.password,
        passwordAgain: this.passwordAgain

      }
    });
    dialogRef.afterClosed().subscribe(result => {
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
