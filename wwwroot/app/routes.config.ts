import { Home } from './home/Home';
import { About } from './about/About';
import { People } from './people/People';
import { PersonDetail } from './people/PersonDetail';
import { Route, Router } from 'angular2/router';

export var Routes = {
  home: new Route({ path: '/', name: 'Home', component: Home}),
  about: new Route({ path: '/about', name: 'About', component: About}),
  people: new Route({ path: '/people', name: 'People', component: People }),
  detail: new Route({ path: '/people/:id', name: 'Detail', component: PersonDetail })
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
