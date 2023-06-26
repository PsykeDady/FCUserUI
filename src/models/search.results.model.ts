import { User } from "./User";

export class SearchResults {

	byName:User[]=[];
	byLastName:User[]=[];
	byAddress:User[]=[];

	public empty():boolean{
		return this.byName.length===0 && this.byLastName.length===0 && this.byAddress.length===0;
	}

}
