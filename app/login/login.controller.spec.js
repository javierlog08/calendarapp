describe('loginController', function() {
  
  var $loginController;
  var $form;
  var $rootScope;
  var $scope;

  beforeEach(function() {
    module('app.loginComponent');
    module('app.shared');
  });
  beforeEach(inject(function($controller, authService, $q, _$rootScope_) {

    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $loginController = $controller("loginController",{
      scope:$scope
    });

    spyOn(authService,"login").and.callFake(function(model) { 
       var defer = $q.defer();
       var errors =  [];
       if(model.username == "myuser" && mode.password == "mypass") {
          defer.resolve(errors);
       } else {
         errors.push({"login-error":"Wrong username or password"});
         defer.resolve(errors);
       }

       return defer.promise;
    });

  }));

  it('loginController - should have a  member model for the form defined', function() {
    expect($loginController.model).toBeDefined();
  });

  it('loginController - auth method should set loginForm invalid when calling with wrong user credentials.',function() {
        
    $loginController.auth($scope.loginForm);

    $rootScope.$apply(); // resolve promises in the services

    expect($loginController.loginForm.$invalid).toBeTruthy();

  });

});