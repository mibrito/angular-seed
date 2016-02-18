'use strict';
class AlohaController {
  constructor($scope){
    console.log('aloha');
  }
}

angular.module('app', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      controller: 'AlohaCtrl',
    });
  }])
  .controller('AlohaCtrl', AlohaController);
