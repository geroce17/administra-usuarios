import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'

import { environment } from '../../environments/environment';

const base_url = environment.base_url;
const base_url_posts = environment.base_url_posts;

import { LoginForm } from '../interfaces/login-form.interface';
import { ItemUserListInterface, ItemUser } from '../interfaces/item-user-list.interface';
import { ItemPostUser } from '../interfaces/item-post-user.interface';

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
  getUser(id: number): Observable<ItemUser> {
    return this.http.get(`${base_url}/api/users/${id}`)
      .pipe(
        map((res: any) => res.data),
        map((data: ItemUser) => data));
  }

  // Actualiza la informacion de usuario por id
  updateUser(formData: ItemUser) {
    const { id, ...data } = formData;
    return this.http.put(`${base_url}/api/users/${id}`, {
      data
    });
  }

  // Obtiene los post del API atraves el id del usuario
  getUserPosts(id: number): Observable<ItemPostUser[]> {
    return this.http.get(`${base_url_posts}/posts?userId=${id}`)
      .pipe(
        map((res: ItemPostUser[]) => res)
      );
  }

  // Borrar post mediante su id
  deleteUserPost(id: number){
    return this.http.get(`${base_url_posts}/posts/${id}`);
  }

}

