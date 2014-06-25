'use strict';

/**
 * @ngdoc directive
 * @name anatelFront.directive:directorProfessionalHistory
 * @description
 * # directorProfessionalHistory
 */
angular.module('anatelFront')
  .directive('directorProfessionalHistory', function () {
    return {
      templateUrl: '/templates/director-professional-history.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the directorProfessionalHistory directive');
      }
    };
  });
