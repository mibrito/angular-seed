import HomeController from './home.controller';

export const moduleName = 'app.home';
export const moduleState = 'home';

angular.module(moduleName, [
  'ui.router',
  'angular-storage'
])
.config(function($stateProvider) {
  'use strict';
  $stateProvider.state(moduleState, {
    url: '/',
    controller: HomeController.displayName,
    templateUrl: 'src/home/home.html',
    data: {
      requiresLogin: true
    }
  });
})
.controller(HomeController.displayName, HomeController);
