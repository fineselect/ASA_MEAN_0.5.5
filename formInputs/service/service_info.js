(function serviceApp() {
  "use strict";

  angular.module('ServiceInformation', [])
  .controller('serviceCtrl', function($scope, $log) {
       $scope.vServices = [
        "Oil change", "Tune up", "Air filter change", "Fuel filter change",
        "Transmission flush", "Radiator flush", "Tire rotation"
      ];

      $scope.status = {
        isopen: false
      };

      $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
      };

      $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };

      $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
    })
    /*
    */
    .directive('serviceInfo', function() {
      return {
        templateUrl: "formInputs/service/service_info.html",
        restrict: "E",
        controller: "serviceCtrl"
      }
    })
})();