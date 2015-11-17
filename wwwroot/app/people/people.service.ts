import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import {Person} from '../core/Person';

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
            .catch((err) => {
                console.log(err);
                return [];
            })
            .map((response) => {
                return response.json();
            })
            .map((people: Array<any>) => {
                let result: Array<Person> = [];

                if (people) {
                    people.forEach((p) => {
                        result.push(p)
                    });
                }
                return result;
            });
    }

    getPerson(id: number) {
        return this._http.get('/api/people/' + id.toString())
            .map((response) => {
                return response.json();
            })
            .map((person: Person) => {
                let result: any = null;

                if (person) {
                    result = person;
                };
                return result;
            });
    }

    private _fetchFailed(error: any) {
        console.error(error);
        return Promise.reject(error);
    }


}