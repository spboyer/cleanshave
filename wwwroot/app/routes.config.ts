import { Home } from './home/Home';
import { About } from './about/About';
import { People } from './people/People';
import { Route, Router } from 'angular2/router';

export var Routes = {
  home: new Route({path: '/', as: 'Home', component: Home}),
  about: new Route({path: '/about', as: 'About', component: About}),
  people: new Route({path: '/people', as: 'People', component: People})
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
