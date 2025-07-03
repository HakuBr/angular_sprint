import { Routes } from '@angular/router';
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [

    {
        path: "",
        pathMatch: "full",
        loadComponent: 
        () => import("./pages/login/login").then(m => m.Login)
    },
    {
        path: "home",
        pathMatch: "full",
        canActivate: [loginGuard],
        loadComponent: 
        () => import("./pages/home/home").then(m => m.Home)
    },
    {
        path: "dashboard",
        pathMatch: "full",
        loadComponent: 
        () => import("./pages/dashboard/dashboard").then(m => m.Dashboard)
    }
];
