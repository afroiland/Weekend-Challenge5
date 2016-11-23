var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/employees' ,{
      templateUrl: '/views/templates/employees.html',
      controller: 'EmployeeController',
      controllerAs: 'empcon',
    })
    .when('/salary' ,{
      templateUrl: '/views/templates/salary.html',
      controller: 'SalaryController',
      controllerAs: 'salcon',
    })
    .otherwise({
      redirectTo: 'home'
    });


}]);
