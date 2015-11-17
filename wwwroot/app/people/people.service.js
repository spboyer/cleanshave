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
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
/**
 * people service
 */
var PeopleService = (function () {
    //   person: Person = null;
    function PeopleService(_http) {
        this._http = _http;
        this.people = [];
    }
    PeopleService.prototype.getPeople = function () {
        //return an observable
        return this._http.get('/api/people')
            .catch(function (err) {
            console.log(err);
            return [];
        })
            .map(function (response) {
            return response.json();
        })
            .map(function (people) {
            var result = [];
            if (people) {
                people.forEach(function (p) {
                    result.push(p);
                });
            }
            return result;
        });
    };
    PeopleService.prototype.getPerson = function (id) {
        return this._http.get('/api/people/' + id.toString())
            .map(function (response) {
            return response.json();
        })
            .map(function (person) {
            var result = null;
            if (person) {
                result = person;
            }
            ;
            return result;
        });
    };
    PeopleService.prototype._fetchFailed = function (error) {
        console.error(error);
        return Promise.reject(error);
    };
    PeopleService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PeopleService);
    return PeopleService;
})();
exports.PeopleService = PeopleService;
