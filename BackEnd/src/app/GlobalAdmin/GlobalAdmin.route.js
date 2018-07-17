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
