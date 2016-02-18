'use strict'; //jshint ignore:line
class AlohaController {
  constructor(){
    console.log('aloha');
  }
}

angular.module('app', [
  'ui.router',
  'angular-jwt',
  'angular-storage'
  ])
  .config(function ($urlRouterProvider, jwtInterceptorProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');

    jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('jwt');
    };

    $httpProvider.interceptors.push('jwtInterceptor');
  })
  .run(function($rootScope, $state, store, jwtHelper) {
    $rootScope.$on('$stateChangeStart', function(e, to) {
      if (to.data && to.data.requiresLogin) {
        if (!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
          e.preventDefault();
          $state.go('login');
        }
      }
    });
  })
  .controller('AlohaController',AlohaController);
