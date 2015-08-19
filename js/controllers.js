var testControllers = angular.module('testControllers', [])

testControllers.controller('SidebarPageCtrl', ['$scope',
    function SidebarPageCtrl($scope) {
        $scope.title = "Robin"
        $scope.aside = {
            "title": "Title",
            "content": "Hello Aside<br />This is a multiline message!"
        };
    }])