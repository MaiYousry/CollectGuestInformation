(function() {
    'use strict';

    angular
        .module('home')
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
              .state('users', {
					url: '/users',
                    templateUrl: './app/GlobalAdmin/user/templates/user.html',
                    controller: 'userController',
                    'controllerAs': 'userCtrl',
                    resolve:{
                        countriesPrepService:countriesPrepService
                    }


                                                  })

                .state('searchUsers', {
					url: '/searchUsers',
                    templateUrl: './app/GlobalAdmin/user/templates/searchUser.html',
                    controller: 'searchUserController',
                    'controllerAs': 'searchUserCtrl',
                    resolve: {
                        userPrepService: userPrepService
                    }

                                 })


                                .state('usersView', {
					url: '/usersView',
                    templateUrl: './app/GlobalAdmin/user/templates/usersView.html',
                    controller: 'searchUserController',
                    'controllerAs': 'searchUserCtrl',
                    resolve: {
                        userPrepService: userPrepService
                    }

                                 })
        });



               userPrepService.$inject = ['UserResource']

                function userPrepService(UserResource) {
            return UserResource.getAllUsers().$promise;
        }

        countriesPrepService.$inject = ['countriesData']

                function countriesPrepService(countriesData) {
            return countriesData.countries
        }


}());
(function() {
    'use strict';

      angular
      .module('home')
      .config(config)
      .run(runBlock);

      config.$inject = ['ngProgressLiteProvider'];
    runBlock.$inject = ['$rootScope', 'ngProgressLite' ];

      function config(ngProgressLiteProvider) {
      ngProgressLiteProvider.settings.speed = 1000;

      }

      function runBlock($rootScope, ngProgressLite ) {

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          startProgress();
      });
      var routingDoneEvents = ['$stateChangeSuccess', '$stateChangeError', '$stateNotFound'];

        angular.forEach(routingDoneEvents, function(event) {
        $rootScope.$on(event, function(event, toState, toParams, fromState, fromParams) {
          endProgress();
        });
      });

        function startProgress() {
        ngProgressLite.start();
      }

        function endProgress() {
        ngProgressLite.done();
      }

      }
  })();
  (function(){
    'use strict';
    angular
        .module('core')
        .service('countriesData', ['$http', countriesData]);
    function countriesData($http) {
        var self = this;
        self.countries = $http.get('http://raw.githubusercontent.com/meMo-Minsk/all-countries-and-cities-json/master/countries.json');
    }
}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('searchUserController', ['$rootScope', '$scope', '$filter', '$translate', '$uibModal', '$state', '$localStorage', 'appCONSTANTS', 'ToastService', 'UserResource', 'userPrepService', searchUserController]);


    function searchUserController($rootScope, $scope, $filter, $translate, $uibModal, $state , $localStorage, appCONSTANTS, ToastService, UserResource, userPrepService) {
        var vm = this;
        vm.selectedUser = [];
        vm.userList = userPrepService;

        $(".js-example-data-array-selected").select2({
            data: vm.userList
        })

          }

}());(function () {
    'use strict';

    angular
        .module('home')
        .controller('userController', ['$rootScope','blockUI','$timeout', '$scope', '$http', '$filter', '$translate', '$uibModal', '$state', '$localStorage', 'appCONSTANTS', 'ToastService', 'AddUserResource','countriesData','countriesPrepService', userController]);


    function userController($rootScope,blockUI,$timeout, $scope, $http, $filter, $translate, $uibModal, $state , $localStorage, appCONSTANTS, ToastService, AddUserResource, countriesData,countriesPrepService) {

             $scope.Gender = 1;
        $scope.Nationality = 1;
        $scope.userCode = "";
        $scope.countriesCities = [];
        $scope.City ="-1";
        $scope.Country = "-1";

                $scope.countriesCities = countriesPrepService.data;

        var d = new Date();
        $scope.bdDateTime = formatDate(d);

        function formatDate(date) {
            return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear();
          }

    $scope.AddUser = function () {
        blockUI.start("Saving..."); 


                var newUser = new AddUserResource();

        newUser.UserFirstName =  $scope.FirstName;
        newUser.UserSecondName = $scope.SecondName;
        newUser.UserFamilyName = $scope.FamilyName;
        newUser.UserNationality = $scope.Nationality;
        newUser.UserJob =  $scope.Job;
        newUser.UserCountry = $scope.Country;
        newUser.UserCity = $scope.City;
        newUser.UserMobile =  $scope.MobileNum;
        newUser.UserEmail = $scope.Email;
        newUser.UserGender =  $scope.Gender;
        newUser.UserBank = $scope.Bank;
        newUser.UserBankNo = $scope.BankNo;
        newUser.UserComment = $scope.Comment;

        var flagDate = new Date($('#BDDateTime').data('date'));
        if(flagDate == 'Invalid Date'){
            $scope.bdDateTime =  new Date($scope.bdDateTime);
        }
        else{
            $scope.bdDateTime = new Date($('#BDDateTime').data('date'));
        }

                var date = new Date($scope.bdDateTime);

                $scope.bdDateTime = date;
        newUser.UserAge = $scope.bdDateTime;

        newUser.$create().then(
            function (results) {
                $scope.UserCode = results.userCode;
                blockUI.stop();
                ToastService.show("right", "bottom", "fadeInUp", $translate.instant('AddSuccess'), "success");
                blockUI.start($translate.instant('CodeLbl')  + results.userCode); 
    },
            function (data, status) {
                ToastService.show("right", "bottom", "fadeInUp", data.data.message, "error");
            }
        );

            }

     }

}());(function() {
    angular
      .module('home')
      .factory('UserResource', ['$resource', 'appCONSTANTS', UserResource])
      .factory('AddUserResource', ['$resource', 'appCONSTANTS', AddUserResource]);

      function AddUserResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Users/', {}, { 
        create: { method: 'POST'}
      })
    }

        function UserResource($resource, appCONSTANTS) {
      return $resource(appCONSTANTS.API_URL + 'Users', {}, {
        getAllUsers: { method: 'GET', isArray:true } 
      })
    }



  }());

