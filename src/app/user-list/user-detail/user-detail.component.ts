import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/models/User';

import { UserService } from 'src/services/UserServices.service';

import { forkJoin } from 'rxjs';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	@Input()
	user:User|undefined=undefined;

	constructor(private userService : UserService) { }

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
		console.log("edit pressed")
	}
}
