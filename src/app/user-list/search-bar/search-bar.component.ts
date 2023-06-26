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
			console.log("searchBarChanges:",nuovoValore)
		})
	}

	search(){
		let target=this.searchBar.get("searchTermInput");
		if (target && target.value!=="")
			this.searchService.searchUser(target.value)
	}

}
