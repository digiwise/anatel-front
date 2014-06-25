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
        $rootScope.directorId = 0;

        gapi.client.anatel.directors.listDirectors({'filter':
          $scope.filter}).execute(function(resp){
          if (resp.queryResult){
            $scope.directors = angular.fromJson(resp.queryResult);
            $scope.$apply();
            //console.log($scope.directors);
          }
        });

        $rootScope.$watch('directorId', function() {
          console.log($rootScope.directorId);
        });


      },
      templateUrl: '/templates/directors.html',
      link: function postLink(scope, element, attrs) {
        //element.text(scope.test2);
      }
    };
  }]);
