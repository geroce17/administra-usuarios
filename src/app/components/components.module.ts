import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { UserListComponent } from './user-list/user-list.component';
import { AppAngularMaterialModule } from '../shared/app.angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { UserDetailSidebarComponent } from './user-detail-sidebar/user-detail-sidebar.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserPostsComponent } from './user-posts/user-posts.component';
import { ChildComponent } from './child/child.component';

@NgModule({
    declarations: [
        UserListComponent,
        UserDetailSidebarComponent,
        UserPostsComponent,
        ChildComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppAngularMaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        UserListComponent,
        UserDetailSidebarComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentsModule { }