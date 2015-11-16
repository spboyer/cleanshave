import * as ng from 'angular2/angular2';
import {Router} from 'angular2/router';
import {Routes} from '../routes.config';

@ng.Component({
	selector: 'home',
	templateUrl: './app/home/home.html',
    directives: [ng.CORE_DIRECTIVES, ng.FORM_DIRECTIVES]
})
export class Home{

	constructor(private _router: Router) {
	}

    goToPeople(){
        this._router.navigate([`/${Routes.people.as}`, {}]);
    }

}