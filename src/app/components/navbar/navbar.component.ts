import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  ngOnInit(): void {
  }

  toCars(){
    document.getElementById('carList').scrollIntoView({ behavior: 'smooth' });
  }

  toHome(){
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  }

  toContacts(){
    document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
  }

}
