import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppAngularMaterialModule } from '../shared/app.angular-material.module';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { CamerasComponent } from './cameras/cameras.component';
import { MonitorComponent } from './monitor/monitor.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CamerasComponent,
    MonitorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    AppAngularMaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PagesComponent,
    HomeComponent
  ],
  providers: [CookieService],
  bootstrap: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule { }