'use strict';

/**
 * @ngdoc directive
 * @name anatelFront.directive:directorsFilters
 * @description
 * # directorsFilters
 */
anatelFront.directive('directorsFilters', ['$rootScope',
  function ($rootScope) {
    return {
      templateUrl: '/templates/directors-filters.html',
      restrict: 'E',
      controller: function($scope, $element, $attrs) {

        $scope.filterSelected = function(el){

          var angularEl = angular.element(el);
          //deselect filter
          if (el.attributes.active.value == 1){
            angularEl.removeClass('filter-selected');
            angularEl.addClass('filter-deselected');
            el.attributes.active.value = 0;
            var filterIndex = $rootScope.directorsFilters.indexOf(parseInt(el.attributes.filter.value));
            if (filterIndex > -1) {
              $rootScope.directorsFilters.splice(filterIndex, 1);
            }
          }
          //select filter
          else {
            angularEl.removeClass('filter-deselected');
            angularEl.addClass('filter-selected');
            el.attributes.active.value = 1;
            $rootScope.directorsFilters.push(parseInt(el.attributes.filter.value));
            //console.log(el.attributes.filter.value);
          }
          $rootScope.$apply();
          //console.log($rootScope.directorsFilters);

        }


      },
      link: function postLink(scope, element, attrs) {
        var buttons = element.find('.btn-group').children();
        //console.log(buttons);
        buttons.bind('click', function() {
          //console.log('test2');
          scope.filterSelected(this);
        });
      }
    };
  }]);
