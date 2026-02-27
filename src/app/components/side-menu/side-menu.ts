import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuHeader } from './side-menu-header/side-menu-header';
import { SideMenuOptionsComponent } from './side-menu-options/side-menu-options.component';



@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [SideMenuHeader,SideMenuOptionsComponent],
  templateUrl: './side-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenu {


 }

