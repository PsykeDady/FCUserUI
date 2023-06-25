import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class AddPopupService {
	
	popup:boolean= false; 
	eventEmitter:EventEmitter<void> = new EventEmitter<void>();

	constructor() {}



	flag(){
		this.popup=!this.popup
		this.eventEmitter.emit()
	}

}