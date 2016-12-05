(function () {
  'use strict';

  angular
    .module('glutton.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('start', {
        url: '/start',
        templateUrl: '/modules/glutton/client/views/start.client.view.html',
        controller: 'StartController',
        controllerAs: 'vm'
      })
  }

}());
