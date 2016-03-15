System.register(['angular2/core', 'angular2/router', 'angular2/http', './people/people.service', './home/Home', './about/About', './people/People', './people/PersonDetail'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, people_service_1, Home_1, About_1, People_1, PersonDetail_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (people_service_1_1) {
                people_service_1 = people_service_1_1;
            },
            function (Home_1_1) {
                Home_1 = Home_1_1;
            },
            function (About_1_1) {
                About_1 = About_1_1;
            },
            function (People_1_1) {
                People_1 = People_1_1;
            },
            function (PersonDetail_1_1) {
                PersonDetail_1 = PersonDetail_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: './app/app.html',
                        styleUrls: ['./app/app.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [people_service_1.PeopleService, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: Home_1.Home, useAsDefault: true },
                        { path: '/about', name: 'About', component: About_1.About },
                        { path: '/people', name: 'People', component: People_1.People },
                        { path: '/people/:id', name: 'Detail', component: PersonDetail_1.PersonDetail }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map