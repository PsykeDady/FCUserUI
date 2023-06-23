import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";

const appRoutes: Routes = [
	{path:"",component: UserListComponent}
]

@NgModule({
	imports:[
		RouterModule.forRoot(appRoutes)
	],

	exports:[RouterModule]
})
export class AppRouting{}
