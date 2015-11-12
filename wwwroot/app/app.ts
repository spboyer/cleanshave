import * as ng from 'angular2/angular2';
import * as router from 'angular2/router';
import { Routes, APP_ROUTES } from './routes.config';


@ng.Component({
    selector: 'app',templateUrl: './app/app.html',
    styleUrls: ['./app/app.css'],
    directives: [router.ROUTER_DIRECTIVES]
})
@router.RouteConfig(APP_ROUTES)
export class App {
    public routes = Routes;
}

