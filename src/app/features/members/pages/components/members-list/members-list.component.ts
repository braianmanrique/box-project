import { Component, input, Input, OnInit } from '@angular/core';
import { MembersListItemComponent } from '../members-list-item/members-list-item.component';

@Component({
  selector: 'app-members-list',
  standalone: true,
  imports: [MembersListItemComponent],
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   members = input.required<string[]>();

}
