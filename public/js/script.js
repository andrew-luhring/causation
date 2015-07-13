'use strict';
var test = false;
angular.module('dft', ['ngSanitize', 'ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider'
  , function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $stateProvider.state('loggedIn', {
    url: '/'
  , controller: 'GlobalController'
  , controllerAs: 'global'
  })
  .state('home', {
    templateUrl: '/views/partials/home.html'
  , url: 'home'
  })
  .state('map', {
    template: '<roo-map></roo-map>'
  , url: '/map'
  })
  .state('about', {
    templateUrl: '/views/layouts/about.html'
  , url: '/about'
  })
  .state('data', {
    templateUrl: '/views/layouts/data.html'
  , url: '/data'
  })
  .state('login', {
    templateUrl: '/views/partials/login.html'
  , url: '/login'
  })
  .state('contact', {
    url: '/contact'
  , templateUrl: '/views/partials/contact.hml'
  })
  .state('contribute', {
    templateUrl: '/views/partials/contribute.html'
  , url: '/contribute'
  })
  .state('contribute.money', {
    url: '/money'
  })
  .state('contribute.info', {
    url: '/info'
  })
  .state('contribute.code', {
    url: '/code'
  });

    $urlRouterProvider.otherwise('/');
  }]);
