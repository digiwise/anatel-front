'use strict';

/**
 * @ngdoc directive
 * @name anatelFront.directive:directorsList
 * @description
 * # directorsList
 */
angular.module('anatelFront')
  .directive('directorsList', ['$rootScope', function ($rootScope) {
    return {
      templateUrl: '/templates/directors-list.html',
      restrict: 'A',
      controller: function($scope, $element, $attrs) {

        if ($scope.directors.indexOf( $scope.director) == 0) {
          $rootScope.directorInformation = $scope.director;
          $rootScope.$apply;
        }

        $scope.showDirectorDetails = function() {

          var thumbList = $element.parent().children();
          for (var i = 0; i < thumbList.length; i++) {
            angular.element(thumbList[i]).find('div').removeClass('thumb-selected');
          }
          var thumbnail = $element.find("div").addClass('thumb-selected');
          $rootScope.directorId = $attrs.id;
          $rootScope.$apply();
          //console.log($attrs.id);
          //console.log($rootScope);
        };

      },
      link: function postLink(scope, element, attrs) {
        element.bind('click', function() {
          //console.log('test2');
          scope.showDirectorDetails();
        });
      }
    };
  }]);
