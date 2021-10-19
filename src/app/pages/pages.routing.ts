import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { PagesComponent } from './pages.component';
import { ChildComponent } from '../components/child/child.component';
import { CamerasComponent } from './cameras/cameras.component';
import { MonitorComponent } from './monitor/monitor.component';

const routes: Routes = [
    {
        path: 'home',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: HomeComponent },
        ]
    },
    {
        path: 'cameras',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: CamerasComponent,
                children: [
                    { path: '', component: MonitorComponent },
                ]
            },
            {
                path: ':monitor',
                component: CamerasComponent,
                children: [
                    { path: '', component: MonitorComponent }
                ]
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }