app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: 'SignUpCtrl',
        controllerAs : 'signCtrl'
    });
});

app.controller('SignUpCtrl', function ($scope, UserFactory, AuthService, $state) {
    $scope.signUp = {
        name : { first: null, last: null},
        email     : null,
        password  : null
    };

    $scope.sendSignUp = function(signUp) {
        UserFactory
            .createNewUser(signUp)
            .then(function() {
                AuthService.getLoggedInUser()
                    .then(function () {
                        $state.go('home');
                    }).catch(function() {
                        $scope.error = "Unable to Sign Up";
                    });
            });
    };
});

