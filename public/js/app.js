'use strict';

// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp',['myApp.filters', 'myApp.services', 'myApp.directives']);
myApp.
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index',
        controller: IndexCtrl
      }).
      when('/addPost', {
        templateUrl: 'partials/addPost',
        controller: AddPostCtrl
      }).
      when('/readPost/:id', {
        templateUrl: 'partials/readPost',
        controller: ReadPostCtrl
      }).
      when('/editPost/:id', {
        templateUrl: 'partials/editPost',
        controller: EditPostCtrl
      }).
      when('/deletePost/:id', {
        templateUrl: 'partials/deletePost',
        controller: DeletePostCtrl
      }).
<<<<<<< HEAD
    when('/readItem/:id', {
      templateUrl: 'partials/readItem',
      controller: ReadItemCtrl
    }).
    when('/editItem/:id', {
      templateUrl: 'partials/editItem',
      controller: EditItemCtrl
    }).
    when('/deleteItem/:id', {
      templateUrl: 'partials/deleteItem',
      controller: DeleteItemCtrl
    }).
=======
>>>>>>> aa34523e29c577f9f9d008989792a8efbe4fcdf1
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);
