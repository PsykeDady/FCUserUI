import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/models/User';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	@Input()
	user:User|undefined=undefined;

	constructor() { }

	ngOnInit(): void {
	}

}
