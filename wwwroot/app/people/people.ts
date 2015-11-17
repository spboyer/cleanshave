import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {PeopleService} from './people.service';
import {Person} from '../core/person';

@Component({
    selector: 'people',
    templateUrl: './app/people/people.html',
    directives: [CORE_DIRECTIVES],
})
export class People {
    public people: Array<Person>;

    constructor(private _peopleService: PeopleService) {
        _peopleService.getPeople()
            .subscribe(res => this.people = res);
    }
}