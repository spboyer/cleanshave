import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Person} from '../core/Person';
import 'rxjs/Rx';
/**
 * people service
 */
@Injectable()
export class PeopleService {
    people: Person[] = [];
    //   person: Person = null;

    constructor(private _http: Http) { }

    getPeople() {
        //return an observable
        return this._http.get('/api/people')
            .map((response) => {
                return response.json();
            });
    }

    getPerson(id: number) {
        return this._http.get('/api/people/' + id.toString())
            .map((response) => {
                return response.json();
            });
    }

    //private _fetchFailed(error: any) {
    //    console.error(error);
    //    return Promise.reject(error);
    //}


}