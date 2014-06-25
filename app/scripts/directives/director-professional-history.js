'use strict';

/**
 * @ngdoc directive
 * @name anatelFront.directive:directorProfessionalHistory
 * @description
 * # directorProfessionalHistory
 */
angular.module('anatelFront')
  .directive('directorProfessionalHistory', ['$rootScope', function ($rootScope) {
    return {
      templateUrl: '/templates/director-professional-history.html',
      restrict: 'E',
      controller: function($scope, $element, $attrs) {
        console.log($rootScope.directorInformation);
      },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the directorProfessionalHistory directive');
      }
    };
  }]);
