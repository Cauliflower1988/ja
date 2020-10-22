import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import {UserService} from '../shared/user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User=new User();
  constructor(private userService:UserService,private location: Location) { }

  ngOnInit(): void {
  }

  createUser():void{
  	this.userService.createUser(this.user)
  		.subscribe(data=>{
  			console.log("already added user"+data);
  			this.goBack();
  		}
  		);
  }
  goBack(): void {
    this.location.back();
  }

}
