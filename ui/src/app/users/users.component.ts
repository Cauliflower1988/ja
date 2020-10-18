import { Component, OnInit } from '@angular/core';
import { User } from '../users/user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	users
  constructor() { }

  ngOnInit(): void {
  }

}
