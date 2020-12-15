import {Component, OnInit} from '@angular/core';
import {strict} from 'assert';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email: string;
  password: string;
  user: User;
  hide = true;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  loginUser(){
    this.userService.login({
      email: this.email,
      passwordPlain: this.password
    });
  }

}
