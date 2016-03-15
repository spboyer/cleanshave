import {Component, OnInit} from 'angular2/core';
import {PeopleService} from './people.service';
import {Person} from '../core/person';

@Component({
    selector: 'people',
    templateUrl: './app/people/people.html',
    directives: [],
})
export class People {
    public people: Array<Person>;

    constructor(private _peopleService: PeopleService) {
        _peopleService.getPeople()
            .subscribe(res => this.people = res);
    }
}