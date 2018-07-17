(function() {
    'use strict';

    angular
    .module('core', [
    		'ngResource',
        'ui.router',
        //'ngMaterial',
        'ngStorage',
      'permission',
      // 'bw.paging',
      //'angular-progress-arc',
      'ui.event',
      'ngProgressLite',
    'ui.bootstrap',
    'pascalprecht.translate',
    'textAngular',
    'blockUI'
    ]);
}());
;(function() {
  'use strict';

  angular
  .module('home', [
  'core'
  ]);
 
}());
;(function() {
  'use strict';

  angular
      .module('core')
      // registering 'lodash' as a constant to be able to inject it later
      .constant('_', window._)
      .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      })
/*      .config(function($mdThemingProvider, $mdIconProvider) {
        // angular material design configs
        $mdIconProvider
            .defaultIconSet('./assets/svg/avatars.svg', 128);

        // use default purble color for now - uncomment to change colors
        $mdThemingProvider.theme('default')
            .primaryPalette('cyan')
            .accentPalette('orange');
      })*/;

      
}());
;(function() {
	angular
		.module('core')
		.constant('appCONSTANTS', { 
 		 'API_URL': 'http://collectguestinformation.azurewebsites.net/api/',
		  	//  'API_URL': 'http://localhost:8950/api/',
			'defaultLanguage':'en'
		})
		.constant('messageTypeEnum', {
			success: 0,
			warning: 1,
			error: 2
		}).constant('userRolesEnum', {
			GlobalAdmin:"GlobalAdmin"
    });
}());;(function() {
    'use strict';

    angular
        .module('core')
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            // main views
            $stateProvider
        
                .state('403', {
                    url: '/403',
                    templateUrl: './app/shell/403.html'
                })
                .state('404', {
                    url: '/404',
                    templateUrl: './app/shell/404.html'
                })
                .state('401', {
                    url: '/401',
                    templateUrl: './app/shell/401.html'
                })
        });
    
}());
;(function() {
    'use strict';
  
    angular
    .module('core').config(["$translateProvider","appCONSTANTS",function($translateProvider,appCONSTANTS){
          
          var en_translations = { 
              "FirstNameLbl" : "First name",
              "SecondNameLbl" : "Second name",
              "FamilyNameLbl" : "Family name",
              "GenderLbl" : "Gender",
              "NationalityLbl" : "Nationality",
              "JobLbl" : "Job",
              "CountryLbl" : "Country",
              "CityLbl" : "City",
              "MobileLbl" : "Mobile",
              "CodeLbl":"Your Code is: ",
              "SelectUser" : "Select User",
              "FirstNameLengthError" : "FirstName is required",
              "LastNameLengthError" : "LastName is required",
              "NotPhoneNumber" : "please enter numbers only",
              "PasswordLengthError" : "Password is required",
              "UserPasswordLbl":"password",
              "ConfirmPasswordLbl":"Confirm password",
              "saveChangesBtn":"save changes",
              "DiscardBtn":"Discard",
              "ClientAddSuccess":"Client Add Success",
              "BackageAddSuccess":"Backage Add Success",
              "BackageEditSuccess":"Backage Edit Success",
              "ClientEditSuccess":"Client Edit Success",
              "LimitUserValidation":"Must be at least 1 user",
              "AddUserBtn":"Add new user", 
              "BasicInfoLbl":"Basic Info",
              "NextLbl":"Next", 
              "userName":"UserName",
              "StatusLbl":"Status",
              "ProductTitleLbl":"Product Title",
              "ProductDescLbl":"Product Desc",
              "ProductCountLbl":"Backage Count",
              "Edit":"Edit",
              "userlimitLbl":"user Limit",
              "concumerLbl":"Consumer User",
              "startDateLbl":"Start Date",
              "enddateLbl":"End Date ", 
              "AddProductBtn":"Add Product",
              "Products":"Products",
              
              "user":"Users",
              "logoutBtn":"logout",
              
              "passworddontmatch":"Passwords don't match",
              
            // *******
            "dwConfirmationLbl":"Would you like add event to your calendar",
            "ConfirmBtn":"Confirm",
            "RejectBtn":"Reject",
            "InvitationNameLbl":"Invitation Name",
            "NoTemplateAvailable":"No Template Available",
            "FilterByGroup":"Filter By Group",
            "MonileNumberLengthError" : "digits must be from 10 :50",
              "MobileNumberReqError" : "Phone is required",
              "OldLengthError" : "digits must be from 1 :3",
              "OldReqError" : " Age is required",
              "BankLbl": "Bank Name",
              "BankNoLbl": "Account Number",
              "MobileNumberLbl" : "Mobile Number",
              "EmailRequiredError" : "Email is required",
              "TextOnly":"Text Only",
              "WrongMail":"please enter right email format",
              "group":"Groups",
              "contact":"Contacts",
              "history":"History",
              "newInvitation":"Send Invitation",
              "groupName":"Group Name",
              "NogroupAvailable":"No group Available",
              "AddBtn":"Add", 
              "AddSuccess":"Added Successfully",
              "GroupNameLbl":"Group Name",
              "GroupNameLengthError":"Group Name is Required",
              "EditSuccess":"Edited Successfully",
              "UpdateGroupLbl":"Update Group",
              "GroupInfo":"Group Information",
              "requiredErr":"Required Field",
              "NameLengthError" : "character must be from 2 :50",
              "AddGroupLbl":"Add Group",
              "deleteConfirmationLbl":"Delete Confirmation",
              "deleteBtn":"Delete",
              "cancelBtn":"Cancel",
              "DeleteSuccess":"Deleted Succefully",

              "NoContactAvailable":"No Contact Available",
              "ContactName":"Contact Name",
              "ContactEmail":"Email",
              "ContactMobileNum":"Mobile Number",
              "AddContactLbl":"Add Contact",
              "ContactInfo":"Contact Information",
              "EmailLbl" : "Email",
              "UpdateContactLbl":"Update Contact",
              "ContactGroups":"Groups",
              "AddMoreBtn":"Add More",
              "SaveAndExitBtn":"Save & Exit",
              "SelectGroups":"Select Groups",
              "SaveGroupBtn":"Save Group",
              "AddGroupCheck":"Add New Group",
              "NoContactsInThisGroup":"No Contacts In This Group",
              "NoJoinedGroups":"No Joined Groups",
              "UploadExcel":"Upload Excel",
              "Upload":"Upload",
              "DownloadSample":"Download Sample",
              "Templates":"Templates",
              "Templatelbl":"Template Name",
              "NewTemplateLbl":"Add Template",
              "RecommendedTemplateImage":"Recommended dimension 1920 x 1200",
              "InvitationDescr":"Invitation Description",
              "ViewInvitationBtn":"View Invitation",
              "invitationDateTimeLbl":"Invitation Date",
              "SelectTemplateLbl":"Select Template",
              "InvitationDescriptionLbl":"Invitation Description",
              "SelectInviteesLbl":"Select Invitees",
              "NoInvitationAvailable":"No Invitation Available",
              "InviteeNameLbl":"Invitee Name",
              "InviteeEmailLbl":"Invitee Email",
              "InviteeMobileNumberLbl":"Invitee Mobile",
              "viewInvitation":"Details",
              "InviteeStatus":"Status",
              "AddTemplateBtn":"Add Template",
              "UploadImageBtn":"Upload image",
              "NoFailedAvailable":"No Failed Contact List",
              "FailedContactLbl":"Failed Contact List",
              "NameValidationDetails":"* Contact name: from 3 : 50 characters.",
              "EmailValidationDetails":"* Email: should be in email format.",
              "NumbertValidationDetails":"*Number: from 3:50 numbers.",
              "ConfirmSuccess":"Confirmed",
              "RejectSuccess":"Rejected",
              "ConfirmationMsg":"You have been confirmed this invitation",
              "RejectionMsg":"You have been rejected this invitation",
              "ConsumedInviteesLbl":"Consumed Invitees",
              "TotalInviteesLbl":"Total Invitees",
              "exceedAllowedInvitees":"Exceeded number of invitees",
              "SendBtn":"Send",
              "FemaleLbl": "Female",
              "MaleLbl": "Male",
              "NoUserAvailable": "No Users Available",
              "CodeeLbl": "User Code",
              "SaudianLbl": "Saudian",
              "NonSaudianLbl": "Non Saudian",
              "BankAccNoReqError": "Bank Account is required",
              "OldLbl": "Age",
              "BDLbl": "Birth date",
              "CommentLbl": "Comment",
              "CommentLengthError": "Comment from 3 to 100 characters",
              "NameLbl" : "Full Name",
              "SelectCountry": "Select Country",
              "SelectCity": "Select City"
          }
          
          var ar_translations = {
            "BDLbl": "تاريخ الميلاد",
            "SelectCountry": "اختر البلد",
            "SelectCity": "اختر المدينه",
            "CommentLengthError": "الملاحظات من 3 ال 100 حرف",
            "CodeeLbl": "كود العميل",
            "NameLbl" : "الاسم بالكامل",
            "FirstNameLbl" : "الاسم الاول",
            "SecondNameLbl" :"الاسم الثاني",
            "FamilyNameLbl" : "اسم العائله",
            "GenderLbl" : "الجنس",
            "NationalityLbl" : "الجنسيه",
            "JobLbl" : "الوظيفة",
            "CountryLbl" : "البلد",
            "CityLbl" : "المدينه",
            "MobileLbl" : "رقم الجوال",
            "LastNameLbl" : "الاسم الثاني",
            "SelectUser" : "اختار المستخدم",
            "CodeLbl":"الكود الخاص بك هو: ",
            "FemaleLbl": "أنثي",
            "MaleLbl": "ذكر",
            "NoUserAvailable": "لا يوجد مستخدمين",
            "SaudianLbl": "سعودي",
            "NonSaudianLbl": "غير سعودي",
            "BankNoLbl": "رقم الحساب(الايبان)",
            "Phone1Lbl" : "الرقم الاول",
            "Phone2Lbl" : "الرقم الثاني",
            "FirstNameLengthError" : "اسم المستخدم الاول مطلوب",
              "LastNameLengthError" : "اسم المستخدم الثاني مطلوب",
              "NotPhoneNumber" : "برجاء إدخال أرقام فقط",
              "PasswordLengthError" : "كلمه المرور مطلوبه", 
              "UserPasswordLbl":"كلمة مرور  ",
              "ConfirmPasswordLbl":"تأكيد كلمه المرور",
              "saveChangesBtn":"حفظ",
              "DiscardBtn":"تجاهل",
              "ClientAddSuccess":"تم اضافه المستحدم بنجاح   ", 
              "BackageAddSuccess":"تم اضافه الباقه بنجاح   ", 
              "BackageEditSuccess":"تم تعديل الباقه بنجاح   ", 
              "ClientEditSuccess":"تم تعديل بيانات المستحدم بنجاح   ", 
              "LimitUserValidation":"لابد من اختيارعلي الاقل مستخدم واحد",               
              "AddUserBtn":"اضافه عميل جديد",
              "BankLbl": "اسم البنك",
              "BankAccNoReqError": "رقم الحساب مطلوب",
              "BasicInfoLbl":"البيانات الاساسيه",
              "NextLbl":"التالي",
              "userName":"اسم المستخدم",
              "StatusLbl":"الحاله",
              "ProductTitleLbl":"اسم المنتج",
              "ProductDescLbl":"شرح المنتج",
              "ProductCountLbl":"عدد الباقات ",
              "Edit":"تعديل",
              "userlimitLbl":"عدد المستخدمين",
              "concumerLbl":"عدد المستهلكين",
              "startDateLbl":"تاريخ البدايه",
              "enddateLbl":"تاريخ الانتهاء", 
              "AddProductBtn":"اضافه منتج",
              "Products":"المنتجات",
              "user":"المستخدمين",
              "logoutBtn":"خروج",
               // *******
               "CommentLbl": "ملاحظات",
               "exceedAllowedInvitees":"تخظي عدد المدعويين",
               "ConsumedInviteesLbl":"مجموع المدعويين",
               "TotalInviteesLbl":"المدعويين المستهلكين",
               "dwConfirmationLbl":"هل تريد اضافة الحدث للتقويم",
               "UploadImageBtn":"اختر صوره",
               "AddTemplateBtn":"اضافة قالب",
               "InviteeStatus":"حاله",
               "InviteeEmailLbl":"البريد الالكتروني",
               "InviteeMobileNumberLbl":"رقم الموبايل",
               "InviteeNameLbl":"اسم المدعو",
               "NoInvitationAvailable":"لا يوجد دعوات",
               "SelectInviteesLbl":"اختر المدعويين",
               "InvitationDescriptionLbl":"تفاصيل الدعوة",
               "SelectTemplateLbl":"اختر القالب",
               "ConfirmBtn":"موافقة",
               "RejectBtn":"رفض",
               "invitationDateTimeLbl":"موعد الدعوة",
               "ViewInvitationBtn":"عرض الدعوة",
               "InvitationDescr":"تفاصيل الدعوة",
               "InvitationNameLbl":"اسم الدعوة",
               "RecommendedTemplateImage":"1920 x 1200 البعد الموصى به",
               "NewTemplateLbl":"اضافة نموذج",
               "Templatelbl":"اسم النموذج",
               "Templates":"قوالب",
              "DownloadSample":"تحميل نوذج",
              "Upload":"تحميل",
              "UploadExcel":"تحميل اكسيل",
              "NoJoinedGroups":"غير مشترك بمجموعة",
              "NoContactsInThisGroup":"لا يوجد أسماء في هذا المجموعه",
              "AddGroupCheck":"اضافة مجموعه جديده",
              "SaveGroupBtn":"اضافة مجموعه",
               "NoTemplateAvailable":"لا يوجد نموذج متاح",
               "SelectGroups":"اضافه في مجموعات",
               "AddMoreBtn":"اضافه جديده",
               "SaveAndExitBtn":"اضافه و خروج",
               "ContactGroups":"المجموعات",
               "FilterByGroup":"تصفيه بالمجموعه",
               "MonileNumberLengthError" : "يجب أن تكون الأرقام من 10: 50",
              "MobileNumberReqError" : "الرقم الشخصي مطلوب",
              "OldReqError" : "العمر مطلوب",
              "OldLengthError" : "يجب أن تكون الأرقام من 1: 3",
              "OldLbl": "العمر",
              "MobileNumberLbl" : "الرقم الشخصي",
              "TextOnly":"حروف فقط",
              "WrongMail":"يرجى إدخال تنسيق البريد الإلكتروني الصحيح ",
              "passworddontmatch":"كلمه المرور غير متطابقه",
              "group":"المجموعات",
              "contact":"الأسماء",
              "history":"الأرشيف",
              "newInvitation":"ارسال دعوة",
              "groupName":"اسم المجموعه",
              "NogroupAvailable":"لا يوجد مجموعات",
              "AddBtn":"اضافه",
              "SendBtn":"ارسال",
              "AddSuccess":"تم الاضافه بنجاح   ",
              "GroupNameLbl":"اسم المجموعه",
              "GroupNameLengthError":"اسم المجموعه مطلوب",
              "EditSuccess":"تم التعديل بنجاح   ", 
              "UpdateGroupLbl":"تعديل المجموعة",
              "GroupInfo":"معلومات المجموعه",
              "requiredErr":"حقل مطلوب",
              "NameLengthError" : "يجب أن تكون الحروف من 2 : 50",
              "AddGroupLbl":"اضافة جروب",
              "deleteConfirmationLbl":"تأكيد الحذف",
              "deleteBtn":"حذف",
              "cancelBtn":"الغاء",
              "DeleteSuccess":"تم الحذف بنجاح",
              "NoContactAvailable":"لا يوجد أسماء",
              "ContactName":"اسم الشخص",
              "ContactEmail":"البريد الاليكتروني",
              "ContactMobileNum":"رقم الموبايل",
              "AddContactLbl":"اضافة سخص",
              "ContactInfo":"بيانات الشخص",
              "EmailLbl" : "البريد الالكتروني",
              "EmailRequiredError" : "البريد الالكتروني مطلوب",
              "UpdateContactLbl":"تعديل الشخص",
              "viewInvitation":"عرض الدعوة",
              "NoFailedAvailable":"لا يوجد جهات اتصال لم يتم ارفاقها",
              "FailedContactLbl":"جهات اتصال لم يتم ارفاقها",
              "NameValidationDetails":"اسم الشخص من 3 : 50 حرف*",
              "EmailValidationDetails":" البريد الاكتروني يجب ادخاله بالتنسيف الصحيح*",
              "NumbertValidationDetails":"رقم الشخص من 3 : 50 حرف*",
              "ConfirmSuccess":"تم الموافقه",
              "RejectSuccess":"تم الرفض",
              "ConfirmationMsg":"تمت الموافقه علي الدعوة",
              "RejectionMsg":"تم رفض هذه الدعوة",
          }
          
          $translateProvider.translations('en',en_translations);
          
          $translateProvider.translations('ar',ar_translations);
          
          $translateProvider.preferredLanguage(appCONSTANTS.defaultLanguage);
          
          }]);
  
  }());
  ;(function() {
    angular
        .module('home')
        .factory('ToastService', ToastService);

    function ToastService() {
        return {
            show: function($positionX,$positionY,$dataEffect,$dataMessage,$dataType,$actionText,$action,$duration){
			
					
				if($(window).width() < 768){
					$positionX = "center";
				}else {
					$positionX = $positionX;
				}		

				if(!$(".pmd-alert-container."+ $positionX +"."+ $positionY).length){
					$('body').append("<div class='pmd-alert-container "+$positionX+" "+$positionY+"'></div>");
				}
					
				var $currentPath = $(".pmd-alert-container."+ $positionX +"."+ $positionY);
				function notificationValue(){
					if($action == "true"){
						if($actionText == null){
							$notification =  "<div class='pmd-alert' data-action='true'>"+$dataMessage+"<a href='javascript:void(0)' class='pmd-alert-close'>×</a></div>";
						}else{
							$notification =  "<div class='pmd-alert' data-action='true'>"+$dataMessage+"<a href='javascript:void(0)' class='pmd-alert-close'>"+$actionText+"</a></div>";	
						}
						return $notification;
					}else {
						if($actionText == null){
							$notification = "<div class='pmd-alert' data-action='false'>"+$dataMessage+"</div>";
						}else{
							$notification =  "<div class='pmd-alert' data-action='false'>"+$dataMessage+"<a href='javascript:void(0)' class='pmd-alert-close'>"+$actionText+"</a></div>";	
						}
						return $notification;
					}
				}
				var $notification = notificationValue();
				var boxLength = $(".pmd-alert-container."+ $positionX +"."+ $positionY + " .pmd-alert").length;
				
				if($(this).attr("data-duration") !== undefined){
					$duration = $(this).attr("data-duration");
				}else {
					$duration = 3000;
				}
				
				if (boxLength > 0) {
					if ($positionY == 'top') {
						$currentPath.append($notification);
					}
					else {
						$currentPath.prepend($notification);
					}
					$currentPath.width($(".pmd-alert").outerWidth());
					if($action == "true"){
						$currentPath.children("[data-action='true']").addClass("visible" +" "+ $dataEffect);	
					}else{
						$currentPath.children("[data-action='false']").addClass("visible" +" "+ $dataEffect).delay($duration).slideUp(
							function(){
								$(this).removeClass("visible" +" "+ $dataEffect).remove();
							});	
					}
					$currentPath.children(".pmd-alert").eq(boxLength).addClass($dataType);
				}else {
					$currentPath.append($notification);
					$currentPath.width($(".pmd-alert").outerWidth());
					if($action == "true"){
						$currentPath.children("[data-action='true']").addClass("visible" +" "+ $dataEffect);	
					}else{
						$currentPath.children("[data-action='false']").addClass("visible" +" "+ $dataEffect).delay($duration).slideUp(
							function(){
								$(this).removeClass("visible" +" "+ $dataEffect).remove();
							});	
					}
					$currentPath.children(".pmd-alert").eq(boxLength).addClass($dataType);
				}
				var $middle = $(".pmd-alert").outerWidth() / 2;  
				$(".pmd-alert-container.center").css("marginLeft","-" + $middle+"px");
		}
		
        }

    }


}());
;(function() {
    'use strict';

    angular
        .module('home')
        .controller('homeCtrl', ['$rootScope','$translate', '$scope', 'appCONSTANTS',  '$state',  '_', '$localStorage', homeCtrl])
       
    function homeCtrl($rootScope, $translate, $scope, appCONSTANTS, $state,$localStorage) {
   
        var vm=this;
    

		$scope.languages = [{
            id:"en",
            label:"english"
        },
        {
            id:"ar",
            label:"arabic"
        }];
		if($localStorage.language == null){
            $scope.selectedLanguage = $scope.languages[0].id;
            $localStorage.language = $scope.selectedLanguage;
        }
        else
            $scope.selectedLanguage = $localStorage.language;
            
        $translate.use($scope.selectedLanguage); 
		
     
		$scope.changeLanguage = function(language){
			$scope.selectedLanguage = language;
			$localStorage.language = $scope.selectedLanguage;
            $state.reload();
            $translate.use(language); 
		}
		$scope.getCurrentTime = function(){
			return (new Date()).getTime()
		}
		
		
    }

    
}());
;
angular.module('core')


.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');
  
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
  })

;
