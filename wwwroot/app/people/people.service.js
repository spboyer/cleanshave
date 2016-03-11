System.register(['angular2/http', 'angular2/core', 'rxjs/Rx'], function(exports_1) {
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
    var http_1, core_1;
    var PeopleService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            /**
             * people service
             */
            PeopleService = (function () {
                //   person: Person = null;
                function PeopleService(_http) {
                    this._http = _http;
                    this.people = [];
                }
                PeopleService.prototype.getPeople = function () {
                    //return an observable
                    return this._http.get('/api/people')
                        .map(function (response) {
                        return response.json();
                    });
                };
                PeopleService.prototype.getPerson = function (id) {
                    return this._http.get('/api/people/' + id.toString())
                        .map(function (response) {
                        return response.json();
                    });
                };
                PeopleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PeopleService);
                return PeopleService;
            })();
            exports_1("PeopleService", PeopleService);
        }
    }
});
//# sourceMappingURL=people.service.js.map