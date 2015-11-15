import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import {Person} from '../core/Person';

/**
 * people service
 */
@Injectable()
export class PeopleService {
    people: Person[] = [];
    person: Person = null;

    constructor(private _http: Http) { }

    getPeople(): Promise<Person[]> {

        this.people.length = 0;
        let promise = this._http.get('/api/people')
            .map((response: any) => response.json()).toPromise()
            .then((people: Person[]) => {
                this.people.push(...people);
                return this.people;
            }).then((_: any) => _, (e: any) => this._fetchFailed(e));
			return promise;
    }

    getPerson(id: number) {
       let promise = this._http.get('/api/people/' + id.toString)
            .map((response: any) => response.json()).toPromise()
            .then((person: Person) => {
                this.person = person;
            }).then((_: any) => _, (e: any) => this._fetchFailed(e));
			return promise;
    }

    private _fetchFailed(error:any) {
		console.error(error);
		return Promise.reject(error);
	}


}