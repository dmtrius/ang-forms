var app = angular.module('myApp', []);
var FormController = function ($scope, $log) {
    var _this = this;
    this.step = 1;

    this.nextStep = function () {
        $log.log('nextStep');
        _this.step++;
    };

    this.prevStep = function () {
        $log.log('prevStep');
        _this.step--;
    };

    this.submitForm = function () {
        console.log("submit");
    }
};
FormController.$inject = ['$scope', '$log'];
app.controller('FormController', FormController);
