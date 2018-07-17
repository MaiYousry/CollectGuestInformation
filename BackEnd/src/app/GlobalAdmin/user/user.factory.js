(function() {
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


    // function GroupPagingResource($resource, appCONSTANTS) {
    //   return $resource(appCONSTANTS.API_URL + 'GroupsPaging', {}, {
    //     getAllPagingGroups: { method: 'GET' } 
    //   })
    // }

  }());
  
