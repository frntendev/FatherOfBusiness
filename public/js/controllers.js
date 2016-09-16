'use strict';

/* Controllers */
function IndexCtrl($scope, $http) {
  $http.get('/api/posts').
    success(function(data, status, headers, config) {
      $scope.posts = data.posts;
    });
}

function AddPostCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.submitPost = function () {
    $http.post('/api/post', $scope.form).
      success(function(data) {
        $location.path('/');
      });
  };
}

function ReadPostCtrl($scope, $http, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });
}

<<<<<<< HEAD

=======
>>>>>>> aa34523e29c577f9f9d008989792a8efbe4fcdf1
function EditPostCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.form = data.post;
    });

  $scope.editPost = function () {
    $http.put('/api/post/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/readPost/' + $routeParams.id);
      });
  };
}

function DeletePostCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });

  $scope.deletePost = function () {
    $http.delete('/api/post/' + $routeParams.id).
      success(function(data) {
        $location.url('/');
      });
  };

  $scope.home = function () {
    $location.url('/');
  };
}
<<<<<<< HEAD



function ReadItemCtrl($scope, $http, $routeParams) {
  $http.get('/api/item/' + $routeParams.id).
  success(function(data) {
    $scope.item = data.item;
  });
}

function EditItemCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/item/' + $routeParams.id).
  success(function(data) {
    $scope.form = data.item;
  });

  $scope.editItem = function () {
    $http.put('/api/item/' + $routeParams.id, $scope.form).
    success(function(data) {
      $location.url('/readItem/' + $routeParams.id);
    });
  };
}

function DeleteItemCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/item/' + $routeParams.id).
  success(function(data) {
    $scope.post = data.item;
  });

  $scope.deleteItem = function () {
    $http.delete('/api/item/' + $routeParams.id).
    success(function(data) {
      $location.url('/');
    });
  };

  $scope.home = function () {
    $location.url('/');
  };
}

=======
>>>>>>> aa34523e29c577f9f9d008989792a8efbe4fcdf1
