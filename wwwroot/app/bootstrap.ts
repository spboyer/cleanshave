import {bootstrap} from 'angular2/platform/browser';
import { App } from './app';

bootstrap(App, [])
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));
