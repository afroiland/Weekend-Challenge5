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
      redirectTo: 'employees'
    });
}]);

app.controller('EmployeeController', ["$http", function($http) {
  console.log('employee controller is running');
  var self = this;
  self.empInfo = [];
  self.newEmployee = {};

  getEmpInfo();

  function getEmpInfo() {
    $http.get('/employees')
      .then(function(response) {
        self.empInfo = response.data;
        // console.log('self.empInfo: ', self.empInfo);
        var totalExpenditure = 0;
        for (var i = 0; i < self.empInfo.length; i++) {
          // console.log('self.empInfo[i].active: ', self.empInfo[i].active);
          if(self.empInfo[i].active == true){
            totalExpenditure += parseInt(self.empInfo[i].annual_salary);
          }
          // console.log('totalExpenditure: ', totalExpenditure);
        self.monthlyExpenditure = Math.round(totalExpenditure/12);
        }
      });
  }

  self.toggleStatus = function(employee) {
    // console.log('employee: ', employee);
    var id = employee.id;
    if(employee.active == true) {
      employee.active = false;
    }else if(employee.active == false) {
      employee.active = true;
    }
    // console.log('employee.active: ', employee.active);
    $http.put('/employees/' + id, employee)
      .then(function(response) {
        getEmpInfo();
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
