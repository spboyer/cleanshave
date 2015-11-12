var ng = require('angular2/angular2');
var router = require('angular2/router');
var http_1 = require('angular2/http');
var app_1 = require('./app');
ng.bootstrap(app_1.App, [router.ROUTER_BINDINGS, http_1.HTTP_BINDINGS, ng.FormBuilder]);
