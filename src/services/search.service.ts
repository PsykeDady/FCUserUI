import { EventEmitter, Injectable } from "@angular/core";
import { User } from "src/models/User";
import { UserService } from "./UserServices.service";
import { SearchResults } from "src/models/search.results.model";

@Injectable()
export class SearchService {
	searchEvent:EventEmitter<SearchResults> = new EventEmitter<SearchResults>();

	constructor(private userService:UserService){}

	searchUser(filter:string){
		if(filter!=="")
			this.userService.searchUser(filter).subscribe(v=>{
				this.searchEvent.emit(v);
			})
		else
			this.reset();
	}

	reset(){
		this.searchEvent.emit(new SearchResults());
	}

}
