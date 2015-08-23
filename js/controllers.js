var testControllers = angular.module('testControllers', [])

testControllers.controller('IsolateScopeCtrl', ['$scope',
    function IsolateScopeCtrl($scope) {
        console.log("ISOLATE SCOPE CONTROLLER")
        $scope.planet = {
            name: 'Mercury',
            star: 'Sol'
        }
    }])