import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'

import { environment } from '../../environments/environment';

const base_url = environment.base_url;

import { LoginForm } from '../interfaces/login-form.interface';
import { ItemUserListInterface, ItemUser } from '../interfaces/item-user-list.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  // get token(): string {
  //   return localStorage.getItem('token') || '';
  // }

  // Envio de datos de formulario para logueo
  login(formData: LoginForm) {
    return this.http.post(`${base_url}/api/login`, formData)
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.token);
        })
      );
  }

  // Comprobar si se ha almacenado el correo y token de autenticacion correspondiente
  isAuthenticated(): Observable<boolean> {
    let email = localStorage.getItem('email');
    let token = localStorage.getItem('token');
    if (email && token) {
      return of(true);
    }
    else {
      return of(false);
    }
  }

  // Obtiene lista de usuarios por pagina
  getUserList(page: number): Observable<ItemUserListInterface> {
    return this.http.get(`${base_url}/api/users?page=${page}`)
      .pipe(map((res: ItemUserListInterface) => res));
  }

  // Obtiene informacion de usuario por id
  getUser(id: number) {
    return this.http.get(`${base_url}/api/users/${id}`)
      .pipe(
        map((res: any) => res.data),
        map((data: ItemUser) => data));
  }

}

