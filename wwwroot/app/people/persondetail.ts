import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {PeopleService} from './people.service';
import {Person} from '../core/person';

@Component({
	selector: 'person-detail',
	templateUrl: './app/people/person.html',
	directives: [],
	inputs: ['person']
})
export class PersonDetail{
	public person: Person;

	constructor(private _peopleService: PeopleService,
		private _routeParams : RouteParams, private _router: Router) {
		let id = +this._routeParams.get('id');
		_peopleService.getPerson(id)
			.subscribe(res => this.person = res);
	}
}
