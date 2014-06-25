'use strict';

/**
 * @ngdoc directive
 * @name anatelFront.directive:directorDetails
 * @description
 * # directorDetails
 */
angular.module('anatelFront')
  .directive('directorDetails', ['$rootScope', function ($rootScope) {
    return {
      templateUrl: '/templates/director-details.html',
      restrict: 'E',
      controller: function($scope, $element, $attrs) {

        //console.log($scope.director);

      },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the directorDetails directive');
      }
    };
  }]);
