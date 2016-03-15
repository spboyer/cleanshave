System.register(['angular2/core', 'angular2/router', './people.service'], function(exports_1, context_1) {
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
    var core_1, router_1, people_service_1;
    var PersonDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (people_service_1_1) {
                people_service_1 = people_service_1_1;
            }],
        execute: function() {
            PersonDetail = (function () {
                function PersonDetail(_peopleService, _routeParams, _router) {
                    var _this = this;
                    this._peopleService = _peopleService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    var id = +this._routeParams.get('id');
                    _peopleService.getPerson(id)
                        .subscribe(function (res) { return _this.person = res; });
                }
                PersonDetail = __decorate([
                    core_1.Component({
                        selector: 'person-detail',
                        templateUrl: './app/people/person.html',
                        directives: [],
                        inputs: ['person']
                    }), 
                    __metadata('design:paramtypes', [people_service_1.PeopleService, router_1.RouteParams, router_1.Router])
                ], PersonDetail);
                return PersonDetail;
            }());
            exports_1("PersonDetail", PersonDetail);
        }
    }
});
//# sourceMappingURL=PersonDetail.js.map