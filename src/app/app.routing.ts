import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserListResolver } from "src/resolvers/userlist.resolver";
import { NewUserComponent } from "./new-user/new-user.component";

const appRoutes: Routes = [
	{path:"",component: UserListComponent, resolve:{userlist:UserListResolver}},
	{path:"new", component:NewUserComponent}
]

@NgModule({
	imports:[
		RouterModule.forRoot(appRoutes)
	],

	exports:[RouterModule]
})
export class AppRouting{}
