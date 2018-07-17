(function () {
    'use strict';

    angular
        .module('home')
        .controller('userController', ['$rootScope','blockUI','$timeout', '$scope', '$http', '$filter', '$translate', '$uibModal', '$state', '$localStorage', 'appCONSTANTS', 'ToastService', 'AddUserResource','countriesData','countriesPrepService', userController]);


    function userController($rootScope,blockUI,$timeout, $scope, $http, $filter, $translate, $uibModal, $state , $localStorage, appCONSTANTS, ToastService, AddUserResource, countriesData,countriesPrepService) {
     
        $scope.Gender = 1;
        $scope.Nationality = 1;
        $scope.userCode = "";
        $scope.countriesCities = [];
        // $scope.Country = "";
        $scope.City ="-1";
        $scope.Country = "-1";
        
        $scope.countriesCities = countriesPrepService.data;

        var d = new Date();
        $scope.bdDateTime = formatDate(d);

        function formatDate(date) {
            // var hours = date.getHours();
            // var minutes = date.getMinutes();
            // var ampm = hours >= 12 ? 'pm' : 'am';
            // hours = hours % 12;
            // hours = hours ? hours : 12; // the hour '0' should be '12'
            // minutes = minutes < 10 ? '0'+minutes : minutes;
            // var strTime = hours + ':' + minutes + ' ' + ampm;
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
       // newUser.UserAge = new Date($('#BDDateTime').data('date'));

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

}());