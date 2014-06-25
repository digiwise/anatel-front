'use strict';

/**
 * @ngdoc directive
 * @name anatelFront.directive:directorInformation
 * @description
 * # directorInformation
 */
angular.module('anatelFront')
  .directive('directorInformation', function () {
    return {
      templateUrl: '/templates/director-information.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the directorInformation directive');
      }
    };
  });
