import { Home } from './home/Home';
import { About } from './about/About';
import { Route, Router } from 'angular2/router';

export var Routes = {
  home: new Route({path: '/', as: 'Home', component: Home}),
  about: new Route({path: '/about', as: 'About', component: About}),
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
