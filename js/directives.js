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

                this.isVisible = false

                // Pre-fetch an external template populated with a custom scope
                var myAside = $aside({
                    title: "Sidebar from directive",
                    templateUrl: 'partials/sidebar.html',
                    show: this.isVisible,
                    backdrop: false
                });

                this.toggle = function() {
                    console.log("SIDEBAR TOGGLE")
                    this.isVisible = !this.isVisible
                    myAside.toggle()
                    console.log("this.isVisible: " + this.isVisible)
                }
            }
        ]
    }
})

testDirectives.directive('testBootstrapSidebar', function() {
    return {
        controllerAs: 'sidebar',
        controller: ['$aside',
            function($aside) {
                console.log("SIDEBAR CONTROLLER")

                this.isVisible = false

                // Pre-fetch an external template populated with a custom scope
                var myAside = $aside({
                    title: "Sidebar from directive",
                    templateUrl: 'partials/bootstrapSidebar.html',
                    show: this.isVisible,
                    backdrop: false
                });

                this.toggle = function() {
                    console.log("SIDEBAR TOGGLE")
                    this.isVisible = !this.isVisible
                    myAside.toggle()
                    console.log("this.isVisible: " + this.isVisible)
                }
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

testDirectives.directive('testChild', ['$rootScope', function($rootScope) {
    return {
        restrict: 'E',
        templateUrl: '/partials/child.html',
        controllerAs: 'child',
        controller: ['$scope',
            function($scope) {
                console.log("CHILD CONTROLLER")

                console.log("$scope.parentMsg: " + $scope.parentMsg)

                this.show = function() {
                    console.log("CHILD SHOW")
                }

                $scope.$on('showChild', function(e) {
                    this.show()
                });
            }
        ],
        link: function() {
            console.log("CHILD LINK")
            console.log("$rootScope.msgFromParent: " + $rootScope.msgFromParent)
        }
    }
}])

testDirectives.directive('testChild2', ['$rootScope', function($rootScope) {
    return {
        restrict: 'E',
        templateUrl: '/partials/child.html',
        controllerAs: 'child',
        scope: {},
        controller: ['$scope',
            function($scope) {
            }
        ]
    }
}])

testDirectives.directive('testParent', ['$rootScope', function($rootScope) {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: '/partials/parent.html',
        controllerAs: 'parent',
        controller: [
            '$scope',
            function ($scope) {
                var self = this

                self.hello = function() {
                    console.log("HELLO FROM PARENT!")
                }
            }]
    }
}])