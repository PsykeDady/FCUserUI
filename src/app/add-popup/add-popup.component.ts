import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddPopupService } from 'src/services/add-popup.service';

@Component({
	selector: 'add-popup-component',
	templateUrl: 'add-popup.component.html',
	styleUrls:["add-popup.component.css"]
})
export class AddPopupComponent implements OnInit, OnDestroy {
	constructor(private addPopupService: AddPopupService) { }

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
}