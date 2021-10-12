import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppAngularMaterialModule } from '../shared/app.angular-material.module';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    AppAngularMaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }