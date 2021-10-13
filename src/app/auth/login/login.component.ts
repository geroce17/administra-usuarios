import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

// servicios
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private router: Router, private fb: FormBuilder, private userService: UserService
  ) {
    this.userService.isAuthenticated()
      .subscribe(auth => {
        if (auth)
          this.router.navigateByUrl('/');
      })
  }

  ngOnInit(): void {
  }

  login() {
    this.formSubmitted = true;
    console.log("Enviada");
    this.userService.login(this.loginForm.value)
      .subscribe(
        res => {
          localStorage.setItem('email', this.loginForm.get('email').value);
          this.router.navigateByUrl('/home');
        },
        (error: any) => {
          if (error.error) {
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            Swal.fire('Ha ocurrido un error', error.error.error, 'error');
          }
        });
  }

}
