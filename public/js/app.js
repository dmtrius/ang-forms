var app = angular.module('myApp', []);
var FormController = function ($scope) {
    var _this = this;

    this.step = 1;

    this.nextStep = function () {
        _this.step++;
    };

    this.prevStep = function () {
        _this.step--;
    };

    this.submitForm = function () {
        console.log($scope);
        console.log("submit");
    }
};
FormController.$inject = ['$scope'];
app.controller('FormController', FormController);
