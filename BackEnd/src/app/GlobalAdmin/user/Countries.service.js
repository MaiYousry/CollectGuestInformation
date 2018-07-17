(function(){
    'use strict';
    angular
        .module('core')
        .service('countriesData', ['$http', countriesData]);
    function countriesData($http) {
        var self = this;
        // self.countries = $http.get('/json/countriesCities.json');
        self.countries = $http.get('http://raw.githubusercontent.com/meMo-Minsk/all-countries-and-cities-json/master/countries.json');
    }
}());