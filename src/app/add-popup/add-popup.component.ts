import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/services/UserServices.service';
import { AddPopupService } from 'src/services/add-popup.service';

@Component({
	selector: 'add-popup-component',
	templateUrl: 'add-popup.component.html',
	styleUrls:["add-popup.component.css"]
})
export class AddPopupComponent implements OnInit, OnDestroy {
	constructor(
		private addPopupService: AddPopupService,
		private userService: UserService
	) { }

	ngOnInit() {
		let el: HTMLElement|null = document.getElementById("total");
		if(el)el.style["overflow"]="hidden"
	}

	ngOnDestroy(): void {
		let el: HTMLElement|null = document.getElementById("total");
		if(el)el.style["overflow"]="auto"
	}

	close() {
		this.addPopupService.flag();
	}

	uploadFile(){
		let dok=document.createElement("input")
		dok.type="file"
		dok.addEventListener("change", (event)=>{
			let uploaded:File|undefined=undefined
			if(event.target){
				let inputfile=(<HTMLInputElement>event.target)
				uploaded=inputfile && inputfile.files && inputfile.files.length>0?inputfile.files["0"]:undefined;
				if(uploaded){
					this.userService.uploadCSV(uploaded).subscribe(
						v=> {
							console.log(v)
							this.userService.getList().subscribe()
						}
					)
				}
			}
			console.log(uploaded)
		})
		dok.click()
	}

}
