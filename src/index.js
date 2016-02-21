'use strict'; //jshint ignore:line

import './home/home.js';
import './login/login';

angular.module('app', [
    'ui.router',
    'angular-jwt',
    'angular-storage',
    'app.home',
    'app.login'
  ])
  .factory('httpCorsInterceptor', function () {
    return {
      request: function (config) {
        config.headers['Access-Control-Allow-Origin'] = true;
        return config;
      }
    };
  })
  .config(function ($urlRouterProvider, jwtInterceptorProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('jwt');
    };
    $httpProvider.interceptors.push('jwtInterceptor');

    $httpProvider.interceptors.push('httpCorsInterceptor');

  })
  .run(function($rootScope, $state, $http, store, jwtHelper) {
    $rootScope.$on('$stateChangeStart', function(e, to) {
      if (to.data && to.data.requiresLogin) {
        if (!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
          e.preventDefault();
          $state.go('login');
        }
      }
    });
  })
  .filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    };
  })
  .controller( 'AppCtrl', function AppCtrl ( $scope, $http ) {
    $scope.$on('$routeChangeSuccess', function(e, nextRoute){
      if ( nextRoute.$$route && angular.isDefined( nextRoute.$$route.pageTitle ) ) {
        $scope.pageTitle = nextRoute.$$route.pageTitle + ' | ngEurope Sample' ;
      }
    });
  });
