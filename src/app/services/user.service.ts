import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import {UserAuth} from '../models/UserAuth';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private readonly usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8091/';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public register(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public login(user: UserAuth){
    console.log(user);
  }
}
