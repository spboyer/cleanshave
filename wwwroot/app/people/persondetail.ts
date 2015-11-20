import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {PeopleService} from './people.service';
import {Person} from '../core/person';

@Component({
	selector: 'person-detail',
	templateUrl: './app/people/person.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
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
