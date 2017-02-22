"use strict";
// importting core modules
var router_1 = require("@angular/router");
// importting component modules
var home_component_1 = require("./modules/home/home.component");
var about_component_1 = require("./modules/about/about.component");
var news_component_1 = require("./modules/news/news.component");
exports.routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'news', component: news_component_1.NewsComponent },
    {
        path: '**',
        redirectTo: '/home'
    }
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map