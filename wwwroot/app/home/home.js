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
var router_1 = require('angular2/router');
var routes_config_1 = require('../routes.config');
var Home = (function () {
    function Home(_router) {
        this._router = _router;
    }
    Home.prototype.goToPeople = function () {
        this._router.navigate([("/" + routes_config_1.Routes.people.as), {}]);
    };
    Home = __decorate([
        ng.Component({
            selector: 'home',
            templateUrl: './app/home/home.html',
            directives: [ng.CORE_DIRECTIVES, ng.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Home);
    return Home;
})();
exports.Home = Home;
