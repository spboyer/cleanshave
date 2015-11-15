import {Component, CORE_DIRECTIVES, FORM_BINDINGS, OnInit} from 'angular2/angular2';
import {PeopleService} from './people';
import {Person} from '../core/person';

@Component({
   selector: 'people',
   templateUrl: './app/people/people.html',
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
 })
 
 export class People {

    public Person[] : people;

    constructor(private PeopleService : _peopleService) {}

    onInit() { this.people = this.getPeople(); }

   getPeople() {
       this._peopleService.getPeople()
       .then((people: Person[]) => this.people = people);
   }
 }