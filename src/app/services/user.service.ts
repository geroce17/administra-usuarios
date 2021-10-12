import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'

import { environment } from '../../environments/environment';

const base_url = environment.base_url;

import { LoginForm } from '../interfaces/login-form.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  login(formData: LoginForm) {
    return this.http.post(`${base_url}/api/login`, formData)
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.token);
        })
      );
  }

  isAuthenticated() : Observable<boolean> {
    let email = localStorage.getItem('email');
    let token = localStorage.getItem('token');
    if(email && token){
      return of(true);
    }
    else{
      return of(false);
    }
  }

}

