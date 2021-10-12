import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // {{ HERE NOT FOUND PAGE }}
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
