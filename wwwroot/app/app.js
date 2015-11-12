var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ng = require('angular2/angular2');
var router = require('angular2/router');
var routes_config_1 = require('./routes.config');
var App = (function () {
    function App() {
        this.routes = routes_config_1.Routes;
    }
    App = __decorate([
        ng.Component({
            selector: 'app', templateUrl: './app/app.html',
            styleUrls: ['./app/app.css'],
            directives: [router.ROUTER_DIRECTIVES]
        }),
        router.RouteConfig(routes_config_1.APP_ROUTES), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
