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
        $scope.test = "this is a test";

        $scope.test2 = [
          {name:'John', age:25, gender:'boy'},
          {name:'Jessie', age:30, gender:'girl'},
          {name:'Johanna', age:28, gender:'girl'},
        ];

        console.log($scope.test2);

        gapi.client.anatel.directors.listDirectors({'filter':
          $scope.filter}).execute(function(resp){
          if (resp.queryResult){
            $scope.directors = angular.fromJson(resp.queryResult);
            $scope.$apply();
            console.log($scope.directors);
          }
        });

      },
      templateUrl: '/templates/directors.html',
      link: function postLink(scope, element, attrs) {
        //element.text(scope.test2);
      }
    };
  }]);
