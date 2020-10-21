import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import {UserService} from '../shared/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user:User;

  constructor(private userService: UserService,   
  private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit(): void {
  	this.getUserById();
  }
  getUserById():void{
  	const id = +this.route.snapshot.paramMap.get('id');
  	console.log(id);
  	this.userService.getUserById(id).subscribe(user=>this.user=user);
  	console.log(this.user);
  }
}
