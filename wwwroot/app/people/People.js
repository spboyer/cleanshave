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
var angular2_1 = require('angular2/angular2');
var people_service_1 = require('./people.service');
var People = (function () {
    //  onInit() {
    //       this.people = this.getPeople();
    //   }
    function People(_peopleService) {
        var _this = this;
        this._peopleService = _peopleService;
        _peopleService.getPeople3()
            .subscribe(function (res) { return _this.people = res; });
    }
    People = __decorate([
        angular2_1.Component({
            selector: 'people',
            templateUrl: './app/people/people.html',
            directives: [angular2_1.CORE_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], People);
    return People;
})();
exports.People = People;
