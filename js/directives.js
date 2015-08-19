var testDirectives = angular.module('testDirectives', [])

testDirectives.directive('testSidebar', function() {
    return {
        restrict: 'A',
        templateUrl: 'partials/sidebar.html'
    }
})