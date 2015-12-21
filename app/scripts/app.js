'use strict';

/**
 * @ngdoc overview
 * @name testAppJsonApp
 * @description
 * # testAppJsonApp
 *
 * Main module of the application.
 */
angular
  .module('testAppJsonApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'formly',
    'formlyBootstrap',
    'ckeditor',
     'ui.ace'
  ],
    function config(formlyConfigProvider) {
    // set templates here
      formlyConfigProvider.setType({
        name: 'custom',
        extends: 'textarea',
        templateUrl: 'number.html'
      });
      formlyConfigProvider.setType({
       name: 'editor',
       templateUrl: 'editor.html'
     });

    })
    .constant('appApiCheck', apiCheck({
        output: {prefix: 'formlyExampleApp'}
      }))

    .run(function(formlyConfig, appApiCheck) {
      formlyConfig.setType({
        name: 'btnPUT',

        template: '<div><button type="{{::to.type}}" class="btn btn-{{::to.btnType}}" ng-click="onClick($event)">Put button</button></div>',
        wrapper: ['bootstrapLabel'],
        defaultOptions: {
          templateOptions: {
            btnType: 'default',
            type: 'btnPUT'
          },
          extras: {
            skipNgModelAttrsManipulator: true // <-- perf optimazation because this type has no ng-model
          }
        },
        controller: function($scope) {
          $scope.onClick = onClick;
          function onClick($event) {
            if (angular.isString($scope.to.onClick)) {
              return $scope.$eval($scope.to.onClick, {$event: $event});
            } else {
              return $scope.to.onClick($event);
            }
          }
        },
        apiCheck: function(check) {
          return {
            templateOptions: {
              onClick: check.oneOfType([check.string, check.func]),
              type: check.string.optional,
              btnType: check.string.optional,
              text: check.string
            }
          }
        },
        apiCheckInstance: appApiCheck
      });
    })
    .run(function(formlyConfig, appApiCheck) {
      formlyConfig.setType({
        name: 'btnDEL',
        template: '<div><button type="{{::to.type}}" class="btn btn-{{::to.btnType}}" ng-click="onClick($event)">Delete button</button></div>',
        wrapper: ['bootstrapLabel'],
        defaultOptions: {
          templateOptions: {
            btnType: 'default',
            type: 'btnDEL'
          },
          extras: {
            skipNgModelAttrsManipulator: true // <-- perf optimazation because this type has no ng-model
          }
        },
        controller: function($scope) {
          $scope.onClick = onClick;

          function onClick($event) {
            if (angular.isString($scope.to.onClick)) {
              return $scope.$eval($scope.to.onClick, {$event: $event});
            } else {
              return $scope.to.onClick($event);
            }
          }
        },
        apiCheck: function(check) {
          return {
            templateOptions: {
              onClick: check.oneOfType([check.string, check.func]),
              type: check.string.optional,
              btnType: check.string.optional,
              text: check.string
            }
          }
        },
        apiCheckInstance: appApiCheck
      });
    })
    .run(function(formlyConfig, appApiCheck) {
      formlyConfig.setType({
        name: 'btnPOST',
        template: '<div><button type="{{::to.type}}" class="btn btn-{{::to.btnType}}" ng-click="onClick($event)">Post button</button></div>',
        wrapper: ['bootstrapLabel'],
        defaultOptions: {
          templateOptions: {
            btnType: 'default',
            type: 'btnPOST'
          },
          extras: {
            skipNgModelAttrsManipulator: true // <-- perf optimazation because this type has no ng-model
          }
        },
        controller: function($scope) {
          $scope.onClick = onClick;

          function onClick($event) {
            if (angular.isString($scope.to.onClick)) {
              return $scope.$eval($scope.to.onClick, {$event: $event});
            } else {
              return $scope.to.onClick($event);
            }
          }
        },
        apiCheck: function(check) {
          return {
            templateOptions: {
              onClick: check.oneOfType([check.string, check.func]),
              type: check.string.optional,
              btnType: check.string.optional,
              text: check.string
            }
          }
        },
        apiCheckInstance: appApiCheck
      });
    })
    .run(function(formlyConfig) {
      formlyConfig.setType({
        name: 'button',
        template: '<div><button type="{{::to.type}}" class="btn btn-{{::to.btnType}}" ng-click="onClick($event)">Get button</button></div>',
        wrapper: ['bootstrapLabel'],
        defaultOptions: {
          templateOptions: {
            btnType: 'default',
            type: 'btnGET'
          },
          extras: {
            skipNgModelAttrsManipulator: true // <-- perf optimazation because this type has no ng-model
          }
        },
        controller: function($scope) {
          $scope.onClick = onClick;
          function onClick($event) {
            if (angular.isString($scope.to.onClick)) {
              return $scope.$eval($scope.to.onClick, {$event: $event});
            } else {
              return $scope.to.onClick($event);
            }
          }
        }
      });
    })
  .run(function(formlyConfig) {
    var attributes = ['date-disabled', 'custom-class', 'show-weeks', 'starting-day',
     'init-date', 'min-mode', 'max-mode', 'format-day',
      'format-month', 'format-year', 'format-day-header',
      'format-day-title', 'format-month-title', 'year-range',
      'shortcut-propagation', 'datepicker-popup', 'show-button-bar',
      'current-text', 'clear-text', 'close-text', 'close-on-date-selection',
      'datepicker-append-to-body'];
    var bindings = ['datepicker-mode', 'min-date', 'max-date'];
    var ngModelAttrs = {};
    angular.forEach(attributes, function(attr) {
      ngModelAttrs[camelize(attr)] = {
        attribute: attr
      };
    });
    angular.forEach(bindings, function(binding) {
      ngModelAttrs[camelize(binding)] = {
        bound: binding
      };
    });
    formlyConfig.setType({
      name: 'datepicker',
      templateUrl: 'datepicker.html',
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      defaultOptions: {
        ngModelAttrs: ngModelAttrs,
        templateOptions: {
          datepickerOptions: {
            format: 'MM.dd.yyyy',
            initDate: new Date()
          }
        }
      },
        controller: ['$scope', function($scope) {
        $scope.datepicker = {};
        $scope.datepicker.opened = false;
        $scope.datepicker.open = function($event) {
          $scope.datepicker.opened = true;
        };
      }]
    });

    function camelize(string) {
      string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
        // Ensure 1st char is always lowercase
      return string.replace(/^([A-Z])/, function(match, chr) {
        return chr ? chr.toLowerCase() : '';
      });
    }
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        // templateUrl: 'views/main.html',
        // controller: 'MainCtrl',
        // controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
