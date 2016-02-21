import LoginController from './login.controller';
import i18n from '../lib/filters/i18n';

import './login.less';

export const moduleName = 'app.login';
export const moduleState = 'login';

angular.module(moduleName, [
  'ui.router',
  'angular-storage'
])
.config(function($stateProvider) {
  'use strict';
  $stateProvider.state(moduleState, {
    url: '/login',
    controller: LoginController.displayName,
    controllerAs: 'ctrl',
    templateUrl: 'src/login/login.html'
  });
})
.filter('i18n', i18n)
.controller(LoginController.displayName, LoginController);
