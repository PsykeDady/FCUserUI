import { Injectable } from "@angular/core";
import { User } from "src/models/User";

@Injectable()
export class UserService {

	userList:User[]=[
		new User("Davide","Galati","psdady@msn.com","Trav I Volta"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
		new User("Giuseppe","Spaghetti","giuseppe@spaghetti.com","Via dalle palle"),
	]
	constructor() {}
}
