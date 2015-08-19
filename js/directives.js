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
        title: 'Sidebar from directive',
        templateUrl: 'partials/sidebar.html',
        controller: ['$scope', '$aside',
            function($scope, $aside) {
                // Pre-fetch an external template populated with a custom scope
                var myAside = $aside({scope: $scope, template: 'partials/sidebars.html', show: true});
                myAside.show()
            }
        ]
    }
})