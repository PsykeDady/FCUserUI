import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AddPopupService } from 'src/services/add-popup.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	popup:boolean = true;
	
	constructor(private addPopService:AddPopupService){
		this.popup= addPopService.popup;
		addPopService.eventEmitter.subscribe(()=>{
			console.log("ciao")
			this.popup= addPopService.popup
		})
	}

	onAddClick():void{
		console.log("ciao")
		this.addPopService.flag()
	}
}
