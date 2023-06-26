import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from 'src/services/search.service';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

	constructor(private searchService:SearchService) { }

	searchBar: FormGroup=new FormGroup({
		"searchTermInput": new FormControl("")
	});

	ngOnInit(): void {
		this.searchBar.get("searchTermInput")?.valueChanges.subscribe(nuovoValore=> {
			this.searchService.searchUser(nuovoValore)
		})
	}

}
