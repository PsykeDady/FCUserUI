import { HttpClient, HttpEventType, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { USER_SERVER_API_UPLOAD_CSV, USER_SERVER_API_USER_ADD, USER_SERVER_API_USER_DELETE, USER_SERVER_API_USER_GET, USER_SERVER_API_USER_LIST, USER_SERVER_API_USER_SEARCH, USER_SERVER_API_USER_UPDATE } from "src/constants/userlist.contants";
import { User } from "src/models/User";
import { UploadFileResponse } from "src/models/uploadFile.response";

@Injectable()
export class UserService {

	status: {userList?:User[]}= {
		userList:[]
	}

	constructor(private httpClient:HttpClient) {}

	getList(): Observable<User[]> {
		return this.httpClient.get<User[]>(USER_SERVER_API_USER_LIST).pipe(tap( v=> {
			this.status["userList"]=v
		}));
	}

	addUser(u:User): Observable<number>{
		return this.httpClient.post<number>(USER_SERVER_API_USER_ADD,u)
	}

	deleteUser(u:User): Observable<boolean>{
		return this.httpClient.delete<boolean>(USER_SERVER_API_USER_DELETE+u.id+"/");
	}

	editUser(u:User):Observable<boolean> {
		console.log(u.id)
		return this.httpClient.put<boolean>(USER_SERVER_API_USER_UPDATE,u);
	}

	getUser(id:number):Observable<User> {
		return this.httpClient.get<User>(USER_SERVER_API_USER_GET+id+"/");
	}

	searchUser(filter:string): Observable<User[][]> {
		return this.httpClient.get<User[][]>(USER_SERVER_API_USER_SEARCH+filter+"/");
	}

	uploadCSV(uploaded:File) : Observable<any> {
		const formData = new FormData();
		formData.append("file",uploaded)
		let header:HttpHeaders = new HttpHeaders();
		header.append("Content-Type","multipart/form-data")
		header.append("Accept","application/json")
			return this.httpClient.post(USER_SERVER_API_UPLOAD_CSV,formData, {
				headers:header
			}
		)
	}
}
