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
    PeopleService.prototype.getPeople3 = function () {
        //return an observable
        return this._http.get('/api/people')
            .map(function (response) {
            return response.json();
        })
            .map(function (people) {
            var result = [];
            if (people) {
                people.forEach(function (p) {
                    console.log(JSON.stringify(p));
                    result.push(p);
                });
            }
            return result;
        });
    };
    PeopleService.prototype.getPeople2 = function () {
        var _this = this;
        this._http.get('/api/people')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.people = data; }, function (err) { return console.log(err); }, function () { return console.log('getPeople complete' + _this.people); });
    };
    PeopleService.prototype.getPeople = function () {
        var _this = this;
        this.people.length = 0;
        var promise = this._http.get('/api/people')
            .map(function (response) { return response.json(); }).toPromise()
            .then(function (people) {
            (_a = _this.people).push.apply(_a, people);
            var _a;
        }).then(function (_) { return _; }, function (e) { return _this._fetchFailed(e); });
        return promise;
    };
    // getPerson(id: number) {
    //    let promise = this._http.get('/api/people/' + id.toString)
    //         .map((response: any) => response.json()).toPromise()
    //         .then((person: Person) => {
    //             this.person = person;
    //         }).then((_: any) => _, (e: any) => this._fetchFailed(e));
    // 		return promise;
    // }
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
