var testDirectives = angular.module('testDirectives', [])

testDirectives.directive('testNav', function() {
    return {
        templateUrl: 'partials/nav.html',
        link: function(scope, el, attrs) {
            scope.label = attrs.navTitle
        }
    }
})

testDirectives.directive('testSidebar', function() {
    return {
        controllerAs: 'sidebar',
        controller: ['$aside',
            function($aside) {
                console.log("SIDEBAR CONTROLLER")

                this.fuck = "FUCK"
                // Pre-fetch an external template populated with a custom scope
                var myAside = $aside({title: "Sidebar from directive", templateUrl: 'partials/sidebar.html', show: false});
            }
        ]
    }
})

testDirectives.directive('testSharedScope', function() {
    return {
        controllerAs: 'shared',
        controller: [
            function() {
                console.log("SHARED SCOPE CONTROLLER")
            }
        ],
        template: "Name: {{ ctrl.planet.name }}, Star: {{ ctrl.planet.star }}"
    }
})

testDirectives.directive('testIsolatedScope', function() {
    return {
        controllerAs: 'isolated',
        controller: [
            function() {
                console.log("ISOLATED SCOPE CONTROLLER")
                this.planet = {
                    name: 'Venus',
                    star: 'Sol'
                }
            }
        ],
        template: "Name: {{ isolated.planet.name }}, Star: {{ isolated.planet.star }}"
    }
})