import { NgModule } from '@angular/core';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule
    ]
    ,
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class AppAngularMaterialModule { }
