import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SearchResults } from 'src/models/search.results.model';
import { AddPopupService } from 'src/services/add-popup.service';
import { SearchService } from 'src/services/search.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	popup:boolean = true;

	constructor(
		private addPopService:AddPopupService){
		this.popup= addPopService.popup;
		addPopService.eventEmitter.subscribe(()=>{
			this.popup= addPopService.popup
		})
	}

	onAddClick():void{
		this.addPopService.flag()
	}
}
