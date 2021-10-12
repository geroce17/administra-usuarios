import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppAngularMaterialModule } from '../shared/app.angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    BrowserModule,
    AppAngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class AuthModule { }