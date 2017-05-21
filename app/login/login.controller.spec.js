describe('loginController', function() {
  
  var $loginController;
  
  beforeEach(function() {
    module('app.loginComponent')
    module('app.shared');
  });
  beforeEach(inject(function(_$controller_) {
    $loginController = _$controller_;
  }));

  it('Should return a promise', function() {

    var authSpy = jasmine.createSpy('auth');

    var ctrl = $loginController('loginController', null);

    ctrl.auth = authSpy;

    ctrl.auth();

    expect(authSpy).toHaveBeenCalled();

  });

});