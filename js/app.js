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
            .when('/sidebar', {
                templateUrl: 'partials/sidebarPage.html'
            })
            .when('/bootstrapSidebar', {
                templateUrl: 'partials/bootstrapSidebarPage.html'
            })
            .when('/isolateScope', {
                templateUrl: 'partials/isolateScope.html',
                controller: 'IsolateScopeCtrl',
                controllerAs: 'ctrl'
            })
            .when('/popover', {
              templateUrl: 'partials/popoverPage.html'
            })
            .when('/parentChild', {
                templateUrl: 'partials/parentChild.html',
                controller: 'ParentCtrl',
                controllerAs: 'parent'
            })
            .when('/parent_and_child', {
                templateUrl: 'partials/parent_and_child.html'
            })

        $locationProvider.html5Mode(false).hashPrefix('!');
    }])