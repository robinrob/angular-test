var testControllers = angular.module('testControllers', [])

testControllers.controller('IsolateScopeCtrl', [
    function IsolateScopeCtrl() {
        console.log("ISOLATE SCOPE CONTROLLER")
        this.planet = {
            name: 'Mercury',
            star: 'Sol'
        }
    }])

testControllers.controller('ParentCtrl', ['$scope', '$rootScope', '$compile',
    function IsolateScopeCtrl($scope, $rootScope, $compile) {
        $scope.parentMsg = "Hello from parent"

        console.log("PARENT CONTROLLER")

        console.log("$scope.childMsg: " + $scope.childMsg)

        $scope.shouldShowChild = function() {
            return true
        }

        this.broadcast = function() {
            console.log("Broadcasting ...")
            $scope.$broadcast('showChild')
        }

        this.broadcast()

        $rootScope.msgFromParent = "Hello"
    }])
