'use strict';

/**
 * @ngdoc directive
 * @name anatelFront.directive:directorsFilters
 * @description
 * # directorsFilters
 */
angular.module('anatelFront')
  .directive('directorsFilters', function () {
    return {
      templateUrl: '/templates/directors-filters.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the directorsFilters directive');
      }
    };
  });
