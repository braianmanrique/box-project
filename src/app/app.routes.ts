import { Routes } from '@angular/router';
import { ContadorComponent } from './pages/contador/contador.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';

export const routes: Routes = [
  {
    path: '',
    component: ContadorComponent
  },
  {
    path: 'hero',
    component: HeroComponent
  },
    {
    path: 'dragonball',
    component: DragonballComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
