'use strict';

describe('Controller: NewviewCtrl', function () {

  // load the controller's module
  beforeEach(module('companionApp'));

  var NewviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewviewCtrl = $controller('NewviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
