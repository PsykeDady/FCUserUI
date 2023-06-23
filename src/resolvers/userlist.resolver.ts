import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';
import {HttpClient} from  "@angular/common/http";

import { USER_SERVER_API_USER_LIST } from 'src/constants/userlist.contants';

import {map} from "rxjs"

@Injectable({ providedIn: 'root' })
export class UserListResolver implements Resolve<User[]> {

	constructor(private httpclient: HttpClient){

	}

	resolve(route: ActivatedRouteSnapshot): Observable<User[]> | Promise<User[]> | User[] {



		return  this.httpclient.get(USER_SERVER_API_USER_LIST,{}).pipe(map( v=>{
			
		}));
	}
}
