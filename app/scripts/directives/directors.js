'use strict';

/**
 * @ngdoc directive
 * @name anatelFront.directive:directors
 * @description
 * # directors
 */
anatelFront.directive('directors', ['$rootScope', function ($rootScope) {
    return {
      restrict: 'E',
      scope: true,
      controller: function($scope, $element, $attrs) {

        $scope.filter = 0;



      },
      templateUrl: '/templates/directors.html',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the directors directive');
      }
    };
  }]);
