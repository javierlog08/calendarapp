describe('Testing loginController', function() {
  
  var $loginController;
  var $formMock;
  var $rootScope;
  var loaderServiceSpy;
  var autServiceSpy;
  var loginDialogSpy;
  var locationSpy;

  beforeEach(function() {
    module('app.loginComponent');
    module('app.shared');
  });
  beforeEach(inject(function($controller, authService, loaderService, $mdDialog, $location, _$rootScope_, $q) {

    $rootScope = _$rootScope_;
    $loginController = $controller("loginController");
    loaderServiceSpy = loaderService;
    loginDialogSpy = $mdDialog;
    locationSpy = $location;
    authServiceSpy = authService;
    
    $formMock = {
      username : {
        $setValidity : function(){},
      },
      password: {
        $setValidity : function(){},
      },
      $setSubmitted : function(){}
    }

    spyOn($formMock.username,"$setValidity");
    spyOn($formMock.password,"$setValidity");
    spyOn($formMock,"$setSubmitted");
    spyOn(loaderServiceSpy,"showLoader");
    spyOn(loaderServiceSpy,"hideLoader");
    spyOn(loginDialogSpy,"hide");
    spyOn(locationSpy,"url");

    spyOn(authServiceSpy,"login").and.callFake(function(model) { 
       var defer = $q.defer();
       var errors =  [];
       if(model.username == "myuser" && model.password == "mypass") {
          defer.resolve(errors);
       } else {
         errors.push({"login-error":"Wrong username or password"});
         defer.resolve(errors);
       }

       return defer.promise;
    });

  }));

  it('>> loginController - should have a  member "model" for the form defined', function() {
    expect($loginController.model).toBeDefined();
  });

  it('>> loginController - should have a  member "loginErrors" for the form defined', function() {
    expect($loginController.formErrors).toBeDefined();
  });

  it('>> loginController.auth() - if is auth called should show a loader with loaderService',function() {
    $loginController.auth($formMock);

    $rootScope.$apply(); // resolve promises in the services

    expect(loaderServiceSpy.showLoader).toHaveBeenCalled();
  });

  it('>> loginController.auth() - should call authService.login to authenticated',function() {
    $loginController.auth($formMock);

    $rootScope.$apply(); // resolve promises in the services

    expect(authServiceSpy.login).toHaveBeenCalled();
  });

  it('>> loginController.auth() - should hide a loader once authService resolve login',function() {
    $loginController.auth($formMock);

    $rootScope.$apply(); // resolve promises in the services

    expect(loaderServiceSpy.hideLoader).toHaveBeenCalled();
  });

  it('>> loginController.auth() - should set inputs as invalid on formController',function() {

    $loginController.model.username = "wronguser";
    $loginController.model.password = "wrongpass";

    $loginController.auth($formMock);

    $rootScope.$apply(); // resolve promises in the services

    expect($formMock.username.$setValidity).toHaveBeenCalled();
    expect($formMock.password.$setValidity).toHaveBeenCalled();
  });

  it('>> loginController.auth() - should set formController submitted to apply validation errors in UI',function() {

    $loginController.model.username = "wronguser";
    $loginController.model.password = "wrongpass";

    $loginController.auth($formMock);

    $rootScope.$apply(); // resolve promises in the services

    expect($formMock.$setSubmitted).toHaveBeenCalled();
  });

  it('>> loginController.auth() - should fill loginErrors property with errors',function() {

    $loginController.model.username = "wronguser";
    $loginController.model.password = "wrongpass";

    $loginController.auth($formMock);

    $rootScope.$apply(); // resolve promises in the services

    expect($loginController.formErrors.length).toBeGreaterThan(0);
  });

  it('>> loginController.auth() - if form success all validations should hide dialog for login-component',function() {

    $loginController.model.username = "myuser";
    $loginController.model.password = "mypass";

    $loginController.auth($formMock);

    $rootScope.$apply(); // resolve promises in the services

    expect(loginDialogSpy.hide).toHaveBeenCalled();
  });

  it('>> loginController.auth() - if form success all validations should redirect with $location provider',function() {

    $loginController.model.username = "myuser";
    $loginController.model.password = "mypass";

    $loginController.auth($formMock);

    $rootScope.$apply(); // resolve promises in the services

    expect(locationSpy.url).toHaveBeenCalled();
  });

});