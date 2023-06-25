import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';

import { UserService } from 'src/services/UserServices.service';

@Injectable({ providedIn: 'root' })
export class UserListResolver implements Resolve<User[]> {

	constructor(private userService:UserService){

	}

	resolve(): Observable<User[]> | Promise<User[]> | User[] {
		return this.userService.getList();
	}
}
