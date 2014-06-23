'use strict';

/**
 * @ngdoc directive
 * @name anatelFront.directive:carousel
 * @description
 * # carousel
 */
angular.module('anatelFront')
  .directive('carousel', function () {
    return {
      templateUrl: '/templates/carousel.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the carousel directive');
      }
    };
  });
