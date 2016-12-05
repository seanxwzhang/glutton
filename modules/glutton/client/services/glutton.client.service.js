(function () {
  'use strict';

  angular
    .module('glutton.services')
    .factory('GluttonService', GluttonService);

    GluttonService.$inject = ['$resource', '$log'];

    function GluttonService($resource, $log) {
      //TODO: correspond to the backend API design
    }
}());