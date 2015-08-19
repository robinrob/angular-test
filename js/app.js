global.jQuery = require ('../bower_components/jquery/dist/jquery.min.js')
global._ = require('../bower_components/lodash/lodash.min.js')

require('../bower_components/jquery-ui/jquery-ui.min.js')
require('../bower_components/angular/angular.min.js')
require('../bower_components/angular-route/angular-route.min.js')
require('../bower_components/angular-resource/angular-resource.min.js')
require('../bower_components/angular-animate/angular-animate.min.js')
require('../bower_components/angular-strap/dist/angular-strap.min.js')

require('./services.js')
require('./controllers.js')
require('./directives.js')

var testApp = angular.module('testApp', [
    'ngRoute',
    'ngAnimate',
    'mgcrea.ngStrap',
    'testControllers',
    'testServices',
    'testDirectives'
])

testApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/sidebarPage.html',
                controller: 'SidebarPageCtrl'
            })

        $locationProvider.html5Mode(false).hashPrefix('!');
    }])