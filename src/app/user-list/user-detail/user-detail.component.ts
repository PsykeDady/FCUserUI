import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/models/User';

import { UserService } from 'src/services/UserServices.service';

import { Router } from '@angular/router';
import { EditUserService } from 'src/services/edit-user.service';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	@Input()
	user:User|undefined=undefined;

	constructor(private userService : UserService, private editUserService:EditUserService, private router:Router) { }

	ngOnInit(): void {
	}

	deleteUser() :void  {
		console.log("delete")
		if(this.user!=undefined){
			this.userService.deleteUser(this.user).subscribe(
				()=>{
					this.userService.getList().subscribe();
				}
			)
		}
	}

	editUser(){
		this.editUserService.user=this.user;
		this.router.navigateByUrl("/new")
	}
}
