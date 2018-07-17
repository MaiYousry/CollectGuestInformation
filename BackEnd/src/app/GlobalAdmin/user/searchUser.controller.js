(function () {
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

}());