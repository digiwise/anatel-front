'use strict';

/**
 * @ngdoc directive
 * @name anatelFront.directive:directorDetails
 * @description
 * # directorDetails
 */
angular.module('anatelFront')
  .directive('directorDetails', function () {
    return {
      templateUrl: '/templates/director-details.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the directorDetails directive');
      }
    };
  });
