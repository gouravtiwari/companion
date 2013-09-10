'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('companionApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no projects in the scope', function () {
    expect(scope.projects.read.length).toBe(0);
  });

  it('should show one project when you add a project page', function () {
    scope.projects.add('Github project');
    expect(scope.projects.read.length).toBe(1);
  });

  it('should remove project when you remove a project page', function () {
    scope.projects.delete(0);
    expect(scope.projects.read.length).toBe(0);
  });
});
