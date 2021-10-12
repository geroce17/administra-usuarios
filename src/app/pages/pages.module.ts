import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppAngularMaterialModule } from '../shared/app.angular-material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule,
    AppAngularMaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }