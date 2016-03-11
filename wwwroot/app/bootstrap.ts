import {bootstrap} from 'angular2/platform/browser';
import * as router from 'angular2/router';
import { Http, HTTP_BINDINGS } from 'angular2/http';
import { App } from './app';
import { PeopleService } from './people/people.service'

bootstrap(App, []);
