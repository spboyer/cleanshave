import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
//import { Routes, APP_ROUTES } from './routes.config';
import { HTTP_PROVIDERS } from 'angular2/http';
import {PeopleService} from './people/people.service';
import { Home } from './home/Home';
import { About } from './about/About';
import { People } from './people/People';
import { PersonDetail } from './people/PersonDetail';

@Component({
    selector: 'app',
    templateUrl: './app/app.html',
    styleUrls: ['./app/app.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [PeopleService, ROUTER_PROVIDERS, HTTP_PROVIDERS]
})
@RouteConfig([
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/people', name: 'People', component: People },
    { path: '/people/:id', name: 'Detail', component: PersonDetail }

])
export class App {

}

