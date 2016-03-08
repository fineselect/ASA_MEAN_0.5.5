(function UserApp() {
  "use strict";
  
  angular.module('UserInformation', [])
    .directive('userInfo', function() {
      return {
        templateUrl: "formInputs/user/user_info.html",
        restrict: "E",
        controller: "userCtrl"
      }
    })
})();