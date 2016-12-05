(function() {
    'use strict';

    angular
        .module('glutton')
        .controller('StartController', StartController);

    StartController.$inject = ['$scope', '$stateParams', '$location'];

    function StartController($scope, $stateParams, $location) {
        var vm = this;        
        vm.addGlutton = addGlutton;
        vm.submit = submit;
        var initialLength = 4; // default group size
        vm.gluttons = [];
        vm.addGlutton(initialLength);



        function addGlutton(length) {
            for (var i = 0; i < length; i++) {
                vm.gluttons.push({name: "", contact: ""});
            }
        }

        function submit() {
            
        }
        
    }

}());