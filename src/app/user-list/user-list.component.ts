import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/services/UserServices.service';
import { User } from 'src/models/User';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	status:{userList?:User[]}  = {}

	constructor(private userService:UserService) {
		this.status=this.userService.status
	}

	ngOnInit(): void {}

}
