require('../bower_components/angular/angular.js')
require('../bower_components/jqueryui/jquery-ui.js');

require('../bower_components/ng-lodash/build/ng-lodash.min.js');
require('../bower_components/angular-route/angular-route.js')
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
    'testDirectives',
    'ngLodash'
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

        $locationProvider.html5Mode(false).hashPrefix('!');
    }])