'use strict';

/**
 * @ngdoc function
 * @name anatelFront.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anatelFront
 */
anatelFront.controller('MainCtrl', ['$scope',
  function ($scope) {

    $scope.filter = 0;
    /*
    try {
      gapi.client.anatel.directors.listDirectors({'filter':
        $scope.filter}).execute(function(resp){
        if (resp.queryResult){
          $scope.directors = angular.fromJson(resp.queryResult);
          console.log($scope.directors);
        }

      });
    }
    catch (e) {
      console.log(e);
    }
    */

  }]);
