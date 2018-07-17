angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/searchUser.html',
    '<script type="text/javascript">\n' +
    '	$(document).ready(function() {\n' +
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '	});\n' +
    '</script>\n' +
    '\n' +
    '<div class="modal-body">\n' +
    '    <h2 class="pmd-card-title-text">{{\'user\' | translate}}</h2>\n' +
    '    <br>\n' +
    '    <form class="form-horizontal" name="newUserForm">\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'SelectUser\' | translate}}</label>\n' +
    '            <select style="width:100% !important" class="form-control select-with-search pmd-select2" \n' +
    '            ng-model="searchUserCtrl.selectedUser"\n' +
    '            ng-options="user as user.userFirstName for user in searchUserCtrl.userList">\n' +
    '            </select>\n' +
    '         </div>\n' +
    '\n' +
    '    </form>\n' +
    '    <!-- <p>{{searchUserCtrl.selectedUser}}</p> -->\n' +
    '    \n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'CodeLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userCode">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userFirstName">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'SecondNameLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userSecondName">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'FamilyNameLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userFamilyName">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'NationalityLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userNationality">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'JobLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userJob">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'CountryLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userCountry">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'CityLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userCity">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'MobileNumberLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userMobile">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'EmailLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userEmail">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'GenderLbl\' | translate}}</label>\n' +
    '        <br>\n' +
    '        <div class="mat-input form-control pmd-textfield-floating-label" ng-if="searchUserCtrl.selectedUser.userGender == 1">{{\'MaleLbl\' | translate}}</div>\n' +
    '        <div class="mat-input form-control pmd-textfield-floating-label" ng-if="searchUserCtrl.selectedUser.userGender == 0">{{\'FemaleLbl\' | translate}}</div>\n' +
    '        \n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    </div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/user.html',
    '<script type="text/javascript">\n' +
    '	$(document).ready(function() {\n' +
    '        $(function () {\n' +
    '            $(\'#BDDateTime\').datetimepicker({\n' +
    '                viewMode: \'years\',\n' +
    '                format: \'DD/MM/YYYY\',\n' +
    '                defaultDate: new Date()\n' +
    '	        });\n' +
    '        });\n' +
    '	});\n' +
    '</script>\n' +
    '\n' +
    '<div class="modal-body">\n' +
    '\n' +
    '    <!-- <h2 class="pmd-card-title-text">{{\'user\' | translate}}</h2> -->\n' +
    '    <h1 style="font: bold">مبادرة فنادق مبارك وبياب لتحفيز الشباب</h1>\n' +
    '    <p>هل تريد/ تريدي زيادة إيرادك الشهري؟</p>\n' +
    '    <p>هل تبحث/ تبحثين عن فرصة عمل وأنت جالس في بيتك؟</p>\n' +
    '    <p>أقنع / أقنعي أي ضيف بالحجز في فنادق مبارك وفنادق بياب واحصل/ احصلي على نسبة 10% عمولة من قيمة الحجز تحول على حسابك البنكي.</p>\n' +
    '    <p>أنت الرابح دوماً معنا</p>\n' +
    '        \n' +
    '    <br><br>\n' +
    '\n' +
    '    <div>\n' +
    '        <h2 style="font: bold">العراقة</h2>\n' +
    '        <img style="width: 50% !important; height: 50% !important;" src="http://collectguestinformation.azurewebsites.net/Images/1.jpg">\n' +
    '    </div>\n' +
    '\n' +
    '    <div>\n' +
    '        <h2 style="font: bold">أصل الضيافة</h2>\n' +
    '        <img style="width: 50% !important; height: 50% !important;" src="http://collectguestinformation.azurewebsites.net/Images/2.jpg">\n' +
    '    </div>\n' +
    '\n' +
    '    <div>\n' +
    '        <h2 style="font: bold">الرحابة</h2>\n' +
    '        <img style="width: 50% !important; height: 50% !important;" src="http://collectguestinformation.azurewebsites.net/Images/3.jpg">\n' +
    '    </div>\n' +
    '\n' +
    '    <div>\n' +
    '        <h2 style="font: bold">المتعة</h2>\n' +
    '        <img style="width: 50% !important; height: 50% !important;" src="http://collectguestinformation.azurewebsites.net/Images/4.jpg">\n' +
    '    </div>\n' +
    '    \n' +
    '    <br><br>\n' +
    '    <form class="form-horizontal" name="newUserForm">\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '            <label for="first-name">{{\'NameLbl\' | translate}}</label>\n' +
    '            <input required type="text"class="mat-input form-control" name="firstName" ng-pattern="/^(\\D)+$/" ng-model="FirstName" ng-minlength="2" ng-maxlength="50">\n' +
    '            <div ng-messages="newUserForm.firstName.$error" class="error">\n' +
    '                    <div ng-show="newUserForm.firstName.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                    <div ng-if="newUserForm.firstName.$error.required && !newUserForm.firstName.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                    <div ng-if="(newUserForm.firstName.$error.minlength || newUserForm.firstName.$error.maxlength) && !newUserForm.firstName.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div style="width: 30% !important" class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '            <label for="regular1" class="control-label">{{\'BDLbl\' | translate}}</label>\n' +
    '                <input name="datetimeTxt" type="text" data-ng-model="bdDateTime" id="BDDateTime" class="form-control"/>\n' +
    '        </div>\n' +
    '     \n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '            <label for="first-name">{{\'JobLbl\' | translate}}</label>\n' +
    '            <input required type="text" class="mat-input form-control" name="job" ng-pattern="/^(\\D)+$/" ng-model="Job" ng-minlength="3" ng-maxlength="50">\n' +
    '            <div ng-messages="newUserForm.job.$error" class="error">\n' +
    '                    <div ng-show="newUserForm.job.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                    <div ng-if="newUserForm.job.$error.required && !newUserForm.job.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                    <div ng-if="(newUserForm.job.$error.minlength || newUserForm.job.$error.maxlength) && !newUserForm.job.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'CountryLbl\' | translate}}</label>\n' +
    '            <select style="width:30% !important" class="form-control"\n' +
    '                ng-model="Country" >\n' +
    '                    <option value="-1">{{\'SelectCountry\' | translate}}</option>\n' +
    '                    <option ng-repeat="(key , value) in countriesCities" ng-value="key">{{key}}</option>\n' +
    '                </select>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'CityLbl\' | translate}}</label>\n' +
    '            <select style="width:30% !important" class="form-control"\n' +
    '                ng-model="City" >\n' +
    '                    <option value="-1">{{\'SelectCity\' | translate}}</option>  \n' +
    '                    <option ng-repeat="(key , value) in countriesCities[Country]" ng-value="value">{{value}}</option>\n' +
    '                </select>\n' +
    '            \n' +
    '        </div>\n' +
    '\n' +
    '        <!-- <div>\n' +
    '            {{countriesCities[Country]}}\n' +
    '        </div>\n' +
    '        <div>\n' +
    '                {{countriesCities.Country[City]}}\n' +
    '        </div> -->\n' +
    '\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label-completed">\n' +
    '            <label>{{\'MobileLbl\' | translate}}</label>\n' +
    '            <div class="row">\n' +
    '                <div class="col-md-1">\n' +
    '                    <input class="form-control" value="00966" disabled >\n' +
    '                </div>\n' +
    '                <div class="col-md-11">\n' +
    '                    <input required type="text" class="mat-input form-control"  name="mobileNumber" numbers-only ng-model="MobileNum" ng-minlength="10" ng-maxlength="50">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            \n' +
    '            <!-- <span class="error" ng-show="newclientForm.phone1.$error.pattern">{{\'NotPhoneNumber\' | translate}}   </span> -->\n' +
    '            <div ng-messages="newUserForm.mobileNumber.$error" class="error">\n' +
    '                <div ng-if="newUserForm.mobileNumber.$error.required && !newUserForm.mobileNumber.$pristine">{{\'MobileNumberReqError\' | translate}}</div>\n' +
    '                <div ng-if="(newUserForm.mobileNumber.$error.minlength || newUserForm.mobileNumber.$error.maxlength)">{{\'MonileNumberLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '            <label>{{\'EmailLbl\' | translate}}</label>\n' +
    '            <input required type="text" class="mat-input form-control" name="email" ng-model="Email" ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
    '            <span class="error" ng-show="newUserForm.email.$error.pattern">{{\'WrongMail\' | translate}}   </span>\n' +
    '            <div ng-messages="newUserForm.email.$error" class="error">\n' +
    '                <div ng-if="newUserForm.email.$error.required && !newUserForm.email.$pristine">{{\'EmailRequiredError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '            <label for="first-name">{{\'BankLbl\' | translate}}</label>\n' +
    '            <input required type="text" class="mat-input form-control" name="bank" ng-pattern="/^(\\D)+$/" ng-model="Bank" ng-minlength="3" ng-maxlength="50">\n' +
    '            <div ng-messages="newUserForm.bank.$error" class="error">\n' +
    '                    <div ng-show="newUserForm.bank.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                    <div ng-if="newUserForm.bank.$error.required && !newUserForm.bank.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                    <div ng-if="(newUserForm.bank.$error.minlength || newUserForm.bank.$error.maxlength) && !newUserForm.bank.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '            <label for="first-name">{{\'BankNoLbl\' | translate}}</label>\n' +
    '            <input required type="text" class="mat-input form-control" name="bankNo" numbers-only ng-model="BankNo" ng-minlength="10" ng-maxlength="50">\n' +
    '            <!-- <span class="error" ng-show="newclientForm.phone1.$error.pattern">{{\'NotPhoneNumber\' | translate}}   </span> -->\n' +
    '            <div ng-messages="newUserForm.bankNo.$error" class="error">\n' +
    '                <div ng-if="newUserForm.bankNo.$error.required && !newUserForm.bankNo.$pristine">{{\'BankAccNoReqError\' | translate}}</div>\n' +
    '                <div ng-if="(newUserForm.bankNo.$error.minlength || newUserForm.bankNo.$error.maxlength)">{{\'MonileNumberLengthError\' | translate}}</div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '            <label for="first-name">{{\'NationalityLbl\' | translate}}</label>\n' +
    '            <br/>\n' +
    '            <label>\n' +
    '                <input type="radio" ng-model="Nationality"  value="0" >\n' +
    '                {{\'NonSaudianLbl\' | translate}}\n' +
    '            </label>\n' +
    '            <label>\n' +
    '                <input type="radio" ng-model="Nationality" ng-value="1">\n' +
    '                {{\'SaudianLbl\' | translate}}\n' +
    '            </label><br/>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '            <label for="first-name">{{\'GenderLbl\' | translate}}</label>\n' +
    '            <br/>\n' +
    '            <label>\n' +
    '                <input type="radio" ng-model="Gender"  value="0" >\n' +
    '                {{\'FemaleLbl\' | translate}}\n' +
    '            </label>\n' +
    '            <label>\n' +
    '                <input type="radio" ng-model="Gender" ng-value="1">\n' +
    '                {{\'MaleLbl\' | translate}}\n' +
    '            </label><br/>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '            <label for="first-name">{{\'CommentLbl\' | translate}}</label>\n' +
    '            <textarea type="text" class="mat-input form-control" name="comment" ng-model="Comment" ng-minlength="3" ng-maxlength="100"></textarea>\n' +
    '            \n' +
    '        </div>\n' +
    '\n' +
    '        <!-- <tt>color = {{Gender}}</tt><br/> -->\n' +
    '\n' +
    '        <!-- <br><br>\n' +
    '        <h3 style="font-weight: bold">\n' +
    '            {{\'CodeLbl\' | translate}} {{}}\n' +
    '        </h3> -->\n' +
    '    </form>\n' +
    '    \n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newUserForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddUser()">{{\'AddBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '\n' +
    '</div>');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/usersView.html',
    '<script>\n' +
    '    $(document).ready(function() {\n' +
    '    $(\'#example\').DataTable( {\n' +
    '        dom: \'Bfrtip\',\n' +
    '        buttons: [\n' +
    '            \'copy\', \'excel\', \'print\'\n' +
    '        ]\n' +
    '    } );\n' +
    '} );\n' +
    '</script>\n' +
    '\n' +
    '<div>\n' +
    '\n' +
    '    <div ng-if="searchUserCtrl.userList.length == 0">\n' +
    '        <span>{{\'NoUserAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '\n' +
    '    <div  ng-if=" searchUserCtrl.userList.length >0">\n' +
    '\n' +
    '        <div >\n' +
    '            <br>\n' +
    '            <table id="example"  class="display" style="width:100% ">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th>{{\'CodeeLbl\' | translate}}</th>\n' +
    '                        <th>{{\'NameLbl\' | translate}}</th>\n' +
    '                        <th>{{\'BDLbl\' | translate}}</th>\n' +
    '                        <th>{{\'NationalityLbl\' | translate}}</th>\n' +
    '                        <th>{{\'JobLbl\' | translate}}</th>\n' +
    '                        <th>{{\'CountryLbl\' | translate}}</th>\n' +
    '                        <th>{{\'CityLbl\' | translate}}</th>\n' +
    '                        <th>{{\'MobileLbl\' | translate}}</th>\n' +
    '                        <th>{{\'EmailLbl\' | translate}}</th>\n' +
    '                        <th>{{\'GenderLbl\' | translate}}</th>\n' +
    '                        <th>{{\'BankLbl\' | translate}}</th>\n' +
    '                        <th>{{\'BankNoLbl\' | translate}}</th>\n' +
    '                        <th>{{\'CommentLbl\' | translate}}</th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="user in searchUserCtrl.userList">\n' +
    '                        <td  data-title="Name" width="20%">{{user.userCode}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{user.userFirstName}}</td>\n' +
    '                        <td  data-title="Name" width="20%" data-type="date">{{ user.userAge | date : \'mediumDate\'}}</td>\n' +
    '                        <td  data-title="Name" width="20%" ng-if="user.userNationality == 0"> {{\'NonSaudianLbl\' | translate}}</td>\n' +
    '                        <td  data-title="Name" width="20%" ng-if="user.userNationality == 1">{{\'SaudianLbl\' | translate}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{user.userJob}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{user.userCountry}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{user.userCity}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{user.userMobile}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{user.userEmail}}</td>\n' +
    '                        <td  data-title="Name" width="20%" ng-if="user.userGender == 0"> {{\'FemaleLbl\' | translate}}</td>\n' +
    '                        <td  data-title="Name" width="20%" ng-if="user.userGender == 1">{{\'MaleLbl\' | translate}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{user.userBank}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{user.userBankNo}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{user.userComment}}</td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <!-- <div style="text-align:center;" paging page="1" page-size="10" total="groupCtrl.groupList.totalCount" paging-action="groupCtrl.changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div> -->\n' +
    '</div>\n' +
    '');
}]);
