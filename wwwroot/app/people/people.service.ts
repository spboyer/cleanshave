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

    getPeople3() {
        //return an observable
        return this._http.get('/api/people')
            .map((response) => {
                return response.json();
            })
            .map((people: Array<any>) => {
                let result: Array<Person> = [];

                if (people) {
                    people.forEach((p) => {
                        console.log(JSON.stringify(p));
                        result.push(p)
                    });
                }
                return result;
            });
    }


    getPeople2() {
        this._http.get('/api/people')
            .map(res => res.json())
            .subscribe(
            data => this.people = data,
            err => console.log(err),
            () => console.log('getPeople complete' + this.people)
            );
    }


    getPeople(): Promise<Person[]> {

        this.people.length = 0;
        let promise = this._http.get('/api/people')
            .map((response: any) => response.json()).toPromise()
            .then((people: Person[]) => {
                this.people.push(...people)

            }).then((_: any) => _, (e: any) => this._fetchFailed(e));

        return promise;
    }

    // getPerson(id: number) {
    //    let promise = this._http.get('/api/people/' + id.toString)
    //         .map((response: any) => response.json()).toPromise()
    //         .then((person: Person) => {
    //             this.person = person;
    //         }).then((_: any) => _, (e: any) => this._fetchFailed(e));
    // 		return promise;
    // }

    private _fetchFailed(error: any) {
        console.error(error);
        return Promise.reject(error);
    }


}