'use strict';

/**
 * @ngdoc directive
 * @name anatelFront.directive:directorInformation
 * @description
 * # directorInformation
 */
anatelFront.directive('directorInformation', ['$rootScope',
  function ($rootScope) {
    return {
      templateUrl: 'templates/director-information.html',
      restrict: 'E',
      controller: function($scope, $element, $attrs) {

        $rootScope.$watch('directorInformation', function() {
          if ($rootScope.directorInformation) {

            switch ($rootScope.directorInformation.appointment) {
              case 1:
                $rootScope.directorInformation.appointment = "FHC";
                break;

              case 2:
                $rootScope.directorInformation.appointment = "Lula";
                break;

              case 3:
                $rootScope.directorInformation.appointment = "Dilma";
                break;

              default:
                $rootScope.directorInformation.appointment = "Not Available";
            }
            $rootScope.$apply;
            //console.log($rootScope.directorInformation);

          }
        });

      },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the directorInformation directive');
      }
    };
  }]);
