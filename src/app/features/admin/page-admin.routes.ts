import { Routes } from '@angular/router';

export const PAGE_ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/admin-home/admin-home.component').then(m => m.AdminHomeComponent),
  },
];
