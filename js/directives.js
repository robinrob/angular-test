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
        controller: ['$scope', '$aside',
            function($scope, $aside) {
                console.log("SIDEBAR CONTROLLER")
                // Pre-fetch an external template populated with a custom scope
                var myAside = $aside({scope: $scope, title: "Sidebar from directive", template: 'partials/sidebar.html', show: false});

                $scope.toggleSidebar = function() {
                    console.log("SHOW SIDEBAR")
                    myAside.show()
                }
            }
        ]
    }
})

testDirectives.directive('testSharedScope', function() {
    return {
        controller: ['$scope',
            function($scope) {
                console.log("SHARED SCOPE CONTROLLER")
            }
        ],
        template: "Name: {{ planet.name }}, Star: {{ planet.star }}"
    }
})

testDirectives.directive('testIsolatedScope', function() {
    return {
        scope: {},
        controller: ['$scope',
            function($scope) {
                console.log("ISOLATED SCOPE CONTROLLER")
                $scope.planet = {
                    name: 'Venus',
                    star: 'Sol'
                }
            }
        ],
        template: "Name: {{ planet.name }}, Star: {{ planet.star }}"
    }
})