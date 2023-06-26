import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/services/UserServices.service';
import { User } from 'src/models/User';
import { SearchService } from 'src/services/search.service';
import { SearchResults } from 'src/models/search.results.model';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	status:{userList:User[]}  = {userList:[]}
	searchResults:SearchResults = new SearchResults();

	constructor(
		private userService:UserService,
		private searchService:SearchService
	) {
		this.status=this.userService.status
		this.searchService.searchEvent.subscribe(v=>{
			console.log(v)
			this.searchResults=v
		})
	}

	ngOnInit(): void {}

	public emptySearch():boolean{
		return this.searchResults.byName.length===0 && this.searchResults.byLastName.length===0 && this.searchResults.byAddress.length===0;
	}

}
