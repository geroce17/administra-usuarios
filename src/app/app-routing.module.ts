import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // {{ HERE NOT FOUND PAGE }}
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
        PagesRoutingModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
