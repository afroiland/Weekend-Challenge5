var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    // .when('/home', {
    //   templateUrl: '/views/templates/home.html',
    //   controller: 'HomeController',
    //   controllerAs: 'home'
    // })
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
  self.newEmployee = {};



  getEmpInfo();

  function getEmpInfo() {
    //$.ajax
    $http.get('/employees')
      .then(function(response) {
        self.empInfo = response.data;
        var totalExpenditure = 0;
        for (var i = 0; i < self.empInfo.length; i++) {
          totalExpenditure += parseInt(self.empInfo[i].annual_salary);
        }
        self.monthlyExpenditure = Math.round(totalExpenditure/12)
      });
  }

  self.addEmployee = function() {
    console.log('new employee: ', self.newEmployee);
    $http.post('/employees', self.newEmployee)
      .then(function(response) {
        console.log('POST finished. Get empInfo again.');
        getEmpInfo();
      });
  }

}]); //end app.controller
