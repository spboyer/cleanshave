import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import { Routes, APP_ROUTES } from './routes.config';
import { HTTP_PROVIDERS } from 'angular2/http';
import {PeopleService} from './people/people.service';

@Component({
    selector: 'app',
    templateUrl: './app/app.html',
    styleUrls: ['./app/app.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [PeopleService, ROUTER_PROVIDERS, HTTP_PROVIDERS]
})
@RouteConfig(APP_ROUTES)
export class App {
    public routes = Routes;
}

