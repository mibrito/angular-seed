import { API } from '../constants';

export default class LoginController {
  constructor($http, store, $state){
    this.$http  = $http;
    this.$state = $state;
    this.store  = store;
    this.user = {};
  }

  login() {
    console.log(this.user);
    this.$http({
      url: API.URL + API.LOGIN,
      method: 'POST',
      data: this.user
    }).then(function(response) {
      this.store.set('jwt', response.data.token);
      this.$state.go('home');
    }.bind(this), function(error) {
      this.error = error;
    }.bind(this));
  }
}

LoginController.displayName = 'LoginController';
