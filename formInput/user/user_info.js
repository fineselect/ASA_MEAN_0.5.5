(function UserApp() {
  "use strict";
  
  angular.module('UserInformation', [])
    .directive('userInfo', function() {
      return {
        templateUrl: "formInput/user/user_info.html",
        restrict: "E",
        controller: "userCtrl"
      }
    })
})();