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
var home_1 = require('./home/home');
var about_1 = require('./about/about');
var App = (function () {
    function App() {
    }
    App = __decorate([
        ng.Component({
            selector: 'app', template: "\n      <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n          <div class=\"container\">\n              <div class=\"navbar-header\">\n                  <a class=\"navbar-brand\" [router-link]=\"['/Home']\">CloseShave</a>\n              </div>\n              <div class=\"collapse navbar-collapse\">\n                  <ul class=\"nav navbar-nav\">\n                      <li><a [router-link]=\"['/Home']\">Home</a></li>\n                      <li><a [router-link]=\"['/About']\">About</a></li>\n                  </ul>\n              </div>\n          </div>\n      </nav>\n      <div class=\"container body-content\">\n          <router-outlet></router-outlet>\n      </div>\n    ",
            styles: ["\n\n    "],
            directives: [router.ROUTER_DIRECTIVES, ng.NgFor]
        }),
        router.RouteConfig([
            { path: '/', component: home_1.Home, as: 'Home' },
            { path: '/About', component: about_1.About, as: 'About' },
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAudHMiXSwibmFtZXMiOlsiQXBwIiwiQXBwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQVksRUFBRSxXQUFNLG1CQUFtQixDQUFDLENBQUE7QUFDeEMsSUFBWSxNQUFNLFdBQU0saUJBQWlCLENBQUMsQ0FBQTtBQUMxQyxxQkFBcUIsYUFBYSxDQUFDLENBQUE7QUFDbkMsc0JBQXNCLGVBQWUsQ0FBQyxDQUFBO0FBR3RDO0lBQUFBO0lBOEJBQyxDQUFDQTtJQTlCREQ7UUFBQ0EsRUFBRUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7WUFDVkEsUUFBUUEsRUFBRUEsS0FBS0EsRUFBQ0EsUUFBUUEsRUFBRUEsdXJCQWlCekJBO1lBQ0RBLE1BQU1BLEVBQUVBLENBQUNBLFVBRVJBLENBQUNBO1lBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLE1BQU1BLENBQUNBLGlCQUFpQkEsRUFBRUEsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7U0FDbkRBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBO1lBQ2hCQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSxXQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQTtZQUMxQ0EsRUFBRUEsSUFBSUEsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsYUFBS0EsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUE7U0FDcERBLENBQUNBOztZQUdEQTtJQUFEQSxVQUFDQTtBQUFEQSxDQTlCQSxBQThCQ0EsSUFBQTtBQUZZLFdBQUcsTUFFZixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBuZyBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQgKiBhcyByb3V0ZXIgZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7IEhvbWUgfSBmcm9tICcuL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBBYm91dCB9IGZyb20gJy4vYWJvdXQvYWJvdXQnO1xuXG5cbkBuZy5Db21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyx0ZW1wbGF0ZTogYFxuICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBbcm91dGVyLWxpbmtdPVwiWycvSG9tZSddXCI+Q2xvc2VTaGF2ZTwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXItbGlua109XCJbJy9Ib21lJ11cIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXItbGlua109XCJbJy9BYm91dCddXCI+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGJvZHktY29udGVudFwiPlxuICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuXG4gICAgYF0sXG4gICAgZGlyZWN0aXZlczogW3JvdXRlci5ST1VURVJfRElSRUNUSVZFUywgbmcuTmdGb3JdXG59KVxuQHJvdXRlci5Sb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZSwgYXM6ICdIb21lJyB9LFxuICAgIHsgcGF0aDogJy9BYm91dCcsIGNvbXBvbmVudDogQWJvdXQsIGFzOiAnQWJvdXQnIH0sXG5dKVxuZXhwb3J0IGNsYXNzIEFwcCB7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
