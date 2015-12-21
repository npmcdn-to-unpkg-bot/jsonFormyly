'use strict';

/**
 * @ngdoc function
 * @name testAppJsonApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the testAppJsonApp
 */
angular.module('testAppJsonApp')
  .controller('FormCtrl', function () {
    var vm = this;
      vm.model = {};
      vm.options = {};
      vm.htmlEditor = '...';
      vm.code = "alert('hello world');";
      var myConfig = [
        {
          type:'editor',
          key: 'editor',
          noFormControl: true,
          templateOptions: {
            type:'',
            label: 'Field 1',
            placeholder: 'Formly is terrific!'
          }
        },
        {
          key: 'custom',
          type: 'custom',
          noFormControl: true,
          templateOptions: {
            label: 'Field 2',
            placeholder: 'Formly is terrific!'
          }
        }, {
          key: 'iData',
          type: 'input',
          templateOptions: {
            label: 'Name',
            placeholder: 'name',
            description: '',
            required: true,
            maxlength: 50,
            minlength: 2
          }
        }, {
          key: 'textALAla',
          type: 'textarea',
          templateOptions: {
            label: 'discription',
            placeholder: 'discription',
            description: '',
            maxlength: 1000,
            minlength: 2
          }
        }, {
          key: 'date',
          type: 'datepicker',
          templateOptions: {
            label: 'Date',
            type: 'text',
            datepickerPopup: 'dd-MMMM-yyyy'
          }
        }, {
          type: 'checkbox',
          key: 'checkThis',
          templateOptions: {
            label: 'Check this box'
          }
        }

        , {
          type: 'btnPOST',
          templateOptions: {
            text: 'With Function',
            onClick: SimplePost
          }
        }
      ];

      function SimplePost() {
        // функция есть в конфиги и подхватывает контроллер

        console.log('i work', vm.model);
        //$http.post('url', model); // или весб обект модель шлем или нет?
      }
      // вот к примеру если у нас в кофиге там пут
      function SimplePut() {
        // функция есть в конфиги и подхватывает контроллер
        //$http.put('url', model); // или весб обект модель шлем или нет?
      }

      function SimpleDelete() {
        //$http.delete('url');
      }
      vm.text = 'this is test';
      vm.fields = myConfig;

  });
