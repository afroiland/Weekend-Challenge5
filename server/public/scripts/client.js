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

app.controller('EmployeeController', ["$http", function($http) {
  console.log('employee controller is running');
  var self = this;
  self.empInfo = [];

  getEmpInfo();

  function getEmpInfo() {
    //$.ajax
    $http.get('/employees')
      .then(function(response) {
        self.empInfo = response.data;
      });
  } // end getWarehouses function
}]); //end app.controller
