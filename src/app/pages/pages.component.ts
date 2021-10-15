import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
    `button {
      margin: 0px 10px
    }`
  ]
})
export class PagesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
