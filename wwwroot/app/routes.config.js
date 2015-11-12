var Home_1 = require('./home/Home');
var About_1 = require('./about/About');
var router_1 = require('angular2/router');
exports.Routes = {
    home: new router_1.Route({ path: '/', as: 'Home', component: Home_1.Home }),
    about: new router_1.Route({ path: '/about', as: 'About', component: About_1.About }),
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });
