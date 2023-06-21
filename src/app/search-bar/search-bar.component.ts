import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

	constructor() { }

	searchBar: FormGroup=new FormGroup({
		"searchTermInput": new FormControl("")
	});

	ngOnInit(): void {
		this.searchBar.get("searchTermInput")?.valueChanges.subscribe(nuovoValore=> {
			console.log("searchBarChanges:",nuovoValore)
		})
	}

}
