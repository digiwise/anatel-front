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
        $rootScope.directorsFilters = [1, 2, 3];

        gapi.client.anatel.directors.listDirectors({'filter':
          $rootScope.directorsFilters}).execute(function(resp){
          if (resp.queryResult){
            $scope.directors = angular.fromJson(resp.queryResult);
            $scope.$apply();
            //console.log($scope.directors);
          }
        });

        $rootScope.$watch('directorId', function() {

          //console.log($rootScope.directorId);

          gapi.client.anatel.director.get({'directorId':
            $rootScope.directorId}).execute(function(resp){
            //console.log(resp);
            if (resp.queryResult){
              $rootScope.directorInformation = angular.fromJson(resp.queryResult);
              $rootScope.directorInformation.mandates = angular.fromJson($rootScope.directorInformation.mandates);
              $rootScope.directorInformation.refLinks = angular.fromJson($rootScope.directorInformation.refLinks);
              $rootScope.$apply();
            }
          });
          //console.log($rootScope.directorInformation);

        });

        $rootScope.$watchCollection('directorsFilters', function() {

          gapi.client.anatel.directors.listDirectors({'filter':
            JSON.stringify($rootScope.directorsFilters)}).execute(function(resp){
            if (resp.queryResult){
              $scope.directors = angular.fromJson(resp.queryResult);
              $scope.$apply();
              //console.log($scope.directors);
            }
          });

        });


      },
      templateUrl: '/templates/directors.html',
      link: function postLink(scope, element, attrs) {
        //element.text(scope.test2);
      }
    };
  }]);
