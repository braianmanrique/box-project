import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-list-item',
  standalone: true,
  imports: [],
  templateUrl: './members-list-item.component.html',
  styleUrls: ['./members-list-item.component.css']
})
export class MembersListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imageUrl = input.required<string>();

}
