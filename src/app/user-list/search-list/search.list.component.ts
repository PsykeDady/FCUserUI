import { Component, Input, OnInit } from '@angular/core';
import { SearchResults } from 'src/models/search.results.model';

@Component({
	selector: 'search-list',
	templateUrl: 'search.list.component.html'
})

export class SearchList implements OnInit {

	@Input()
	searchResult:SearchResults = new SearchResults();

	constructor() {}

	ngOnInit() {}
}
