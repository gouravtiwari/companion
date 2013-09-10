'use strict';

angular.module('companionApp')
  .controller('MainCtrl', function ($scope) {
    $scope.projects = {
      read: [],
      add: function(project_name){
        this.read.push(project_name);
      },
      delete: function(index){
        this.read.splice(index, 1);
      }
    };
  });
