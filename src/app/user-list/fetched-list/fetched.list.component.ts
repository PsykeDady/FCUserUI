import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/User';

@Component({
	selector: 'fetched-list',
	templateUrl: 'fetched.list.component.html'
})
export class FetchedList implements OnInit {

	@Input()
	userList:User[]=[];

	constructor() { }

	ngOnInit() { }
}
