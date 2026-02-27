import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


interface MenuOption {
  label: string;
  sublabel: string;
  router: string;
  icon: string;
}

@Component({
  selector: 'app-side-menu-options',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styleUrls: ['./side-menu-options.component.css']
})
export class SideMenuOptionsComponent {

  constructor() { }


    menuOptions : MenuOption[] = [
       {
      icon: 'fa-solid fa-chart-line',
      label: 'Inicio',
      sublabel: '',
      router: '/dashboard/home'
    },
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Miembros',
      sublabel: '',
      router: '/dashboard/members'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Personal',
      sublabel: '',
      router: '/dashboard/staff'
    },
      {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      sublabel: '',
      router: '/dashboard/staff'
    }
  ]
}
