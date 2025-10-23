import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  standalone: true,
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.scss'
})
export class DragonballComponent {
 characters=signal<Character[]>([
  {id:1, name:'Goku', power:9000},
  {id:2, name:'Vegeta', power:8500},
  {id:3, name:'Gohan', power:7800}
 ])
}
