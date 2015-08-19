var testDirectives = angular.module('testDirectives', [])

testDirectives.directive('testNav', function() {
    return {
        restrict: 'A',
        templateUrl: 'partials/nav.html',
        link: function(scope, el, attrs) {
            scope.label = attrs.navTitle
        }
    }
})

testDirectives.directive('testSidebar', function() {
    return {
        restrict: 'A',
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