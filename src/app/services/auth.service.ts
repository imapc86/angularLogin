import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://54.210.115.183:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{

    return this.http.get(`${this.url}/v1/users`);

  }


  postUser(user:User):Observable<any>{

    return this.http.post(`${this.url}/v1/users`, user);

  }

  login(email: string, password: string):Observable<any>{

    const body= {
      email,
      password
    }

    return this.http.post(`${this.url}/auth/signup`, body)

  }
}
