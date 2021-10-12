import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { UserListComponent } from './user-list/user-list.component';
import { AppAngularMaterialModule } from '../shared/app.angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        UserListComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppAngularMaterialModule
    ],
    exports: [
        UserListComponent,
        SidebarComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule { }