import * as ng from 'angular2/angular2';
import * as router from 'angular2/router';
import { Home } from '../public/home/home';
import { About } from '../public/about/about';


@ng.Component({
    selector: 'app'
})
@router.RouteConfig([
    { path: '/', component: Home, as: 'Home' },
    { path: '/About', component: About, as: 'About' },
])
@ng.View({
    templateUrl: './ng-app/components/app/app.html',
    styleUrls: ['./ng-app/components/app/app.css'],
    directives: [router.ROUTER_DIRECTIVES, ng.NgFor]
})
export class App {

}

