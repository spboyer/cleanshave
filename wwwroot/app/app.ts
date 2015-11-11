import * as ng from 'angular2/angular2';
import * as router from 'angular2/router';
import { Home } from './home/home';
import { About } from './about/about';


@ng.Component({
    selector: 'app',templateUrl: './app/app.html',
    styleUrls: ['./app/app.css'],
    directives: [router.ROUTER_DIRECTIVES, ng.NgFor]
})
@router.RouteConfig([
    { path: '/', component: Home, as: 'Home' },
    { path: '/About', component: About, as: 'About' },
])
export class App {

}

