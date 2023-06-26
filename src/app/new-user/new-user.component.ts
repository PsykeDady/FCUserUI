import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/User';
import { UserService } from 'src/services/UserServices.service';
import { EditUserService } from 'src/services/edit-user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnDestroy {

	edit:boolean=false;

	newuserform: FormGroup= new FormGroup({
		"fname":new FormControl("", [Validators.required]),
		"lname":new FormControl("", [Validators.required]),
		"address":new FormControl("", [Validators.required]),
		"email":new FormControl("", [Validators.email,Validators.required]),
	});

	constructor(
		private userService:UserService,
		private router:Router,
		private editUserService:EditUserService) {
			this.edit=editUserService.user!=undefined;
			if(editUserService.user){
				this.newuserform.get("fname")?.setValue(editUserService.user.nome)
				this.newuserform.get("lname")?.setValue(editUserService.user.cognome)
				this.newuserform.get("address")?.setValue(editUserService.user.indirizzo)
				this.newuserform.get("email")?.setValue(editUserService.user.email)
			}
	}

	ngOnDestroy(): void {
		this.editUserService.user=undefined;
	}

	putuser(){
		let fname=this.newuserform.get("fname")?.value
		let lname=this.newuserform.get("lname")?.value
		let address=this.newuserform.get("address")?.value
		let email=this.newuserform.get("email")?.value
		let id=this.editUserService.user?.id;

		let u:User = new User(fname,lname,email,address,id);
		let back:Function = ()=>{
			this.router.navigateByUrl("/")
		}
		if(id) {
			this.userService.editUser(u).subscribe(
				()=>{back()},
				error=> {
					console.error(error)
				}
			)
		}
		else {
			this.userService.addUser(u).subscribe(()=>{back()})
		}
	}

	reset(){
		this.newuserform.markAsUntouched()
		this.newuserform.reset()
		if(this.editUserService.user){
			this.newuserform.get("fname")?.setValue(this.editUserService.user.nome)
			this.newuserform.get("lname")?.setValue(this.editUserService.user.cognome)
			this.newuserform.get("address")?.setValue(this.editUserService.user.indirizzo)
			this.newuserform.get("email")?.setValue(this.editUserService.user.email)
		}
	}
}
