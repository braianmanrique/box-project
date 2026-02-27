import { Routes } from '@angular/router';
import { StaffComponent } from './features/staff/pages/staff.component';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dashboard-page/dashboard-page').then(m => m.DashboardPage),
    children: [
       {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'members',
        loadComponent: () => import('./features/members/pages/members.component').then(m => m.MembersComponent),
      },
      {
        path: 'staff',
        loadComponent: () => import('./features/staff/pages/staff.component').then(m => m.StaffComponent),
      },
      {
        path: '**',
        redirectTo: 'members',
      }
    ]
  },

  { path: '', pathMatch: 'full', redirectTo: 'auth/login' },

  { path: '**', redirectTo: 'auth/login' },

];
