import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/user-home/user-home.component').then(m => m.UserHomeComponent),
  },
];
