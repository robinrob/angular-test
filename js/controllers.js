var testControllers = angular.module('testControllers', [])

testControllers.controller('IsolateScopeCtrl', ['$scope',
    function IsolateScopeCtrl() {
        console.log("ISOLATE SCOPE CONTROLLER")
        this.planet = {
            name: 'Mercury',
            star: 'Sol'
        }
    }])