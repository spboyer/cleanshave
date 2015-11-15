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
var People = (function () {
    function People(PeopleService) {
        this.PeopleService = PeopleService;
        this.Person = [];
    }
    People.prototype.onInit = function () { this.people = this.getPeople(); };
    People.prototype.getPeople = function () {
        var _this = this;
        this._peopleService.getPeople()
            .then(function (people) { return _this.people = people; });
    };
    People = __decorate([
        angular2_1.Component({
            selector: 'people',
            templateUrl: './app/people/people.html',
            directives: [angular2_1.CORE_DIRECTIVES, FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [Object])
    ], People);
    return People;
})();
exports.People = People;
