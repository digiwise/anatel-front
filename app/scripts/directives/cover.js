'use strict';

/**
 * @ngdoc directive
 * @name anatelFront.directive:carousel
 * @description
 * # carousel
 */
anatelFront.directive('cover', ['$rootScope',
  function ($rootScope) {
    return {
      templateUrl: 'templates/cover.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the carousel directive');
      }
    };
  }]);
