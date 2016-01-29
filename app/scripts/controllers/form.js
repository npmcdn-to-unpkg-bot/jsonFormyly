'use strict';

/**
 * @ngdoc function
 * @name testAppJsonApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the testAppJsonApp
 */
angular.module('testAppJsonApp')
  .controller('FormCtrl', function() {
    var vm = this;
    vm.model = {};
    vm.options = {};
    vm.htmlEditor = '...';
    vm.code = "alert('hello world');";
    var myConfig = [{
        type: 'editor',
        key: 'editor',
        noFormControl: true,
        templateOptions: {
          type: '',
          label: 'Field 1',
          placeholder: 'Formly is terrific!'
        }
      }, {
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
        key: 'one',
        templateOptions: {
          label: 'Ангулфр',
          value: '1'
        }
      }, {
        type: 'checkbox',
        key: 'two',
        templateOptions: {
          label: 'прелесть',
          value: '12'
        }
      }, {
        type: 'checkbox',
        key: 'three',
        templateOptions: {
          label: 'отпусти меня',
          value: '3'
        }
      }, {
        type: 'checkbox',
        key: 'four',
        templateOptions: {
          label: 'спать'
        }
      }, {
        "key": "triedEmber",
        "type": "radio",
        "templateOptions": {
          "label": "Have you tried EmberJs yet?",
          "options": [{
            "name": "Yes, and I love it!",
            "value": "yesyes"
          }, {
            "name": "Yes, but I'm not a fan...",
            "value": "yesno"
          }, {
            "name": "Nope",
            "value": "no"
          }]
        }
      },


      {
        key: 'marvel1',
        type: 'select',
        templateOptions: {
          label: 'Normal Select',
          options: [{
            name: 'Iron Man',
            value: 'iron_man'
          }, {
            name: 'Captain America',
            value: 'captain_america'
          }, {
            name: 'Black Widow',
            value: 'black_widow'
          }, {
            name: 'Hulk',
            value: 'hulk'
          }, {
            name: 'Captain Marvel',
            value: 'captain_marvel'
          }]
        }
      }, {
        key: 'marvel2',
        type: 'select',
        templateOptions: {
          label: 'Grouped Select',
          options: [{
            name: 'Iron Man',
            value: 'iron_man',
            group: 'Male'
          }, {
            name: 'Captain America',
            value: 'captain_america',
            group: 'Male'
          }, {
            name: 'Black Widow',
            value: 'black_widow',
            group: 'Female'
          }, {
            name: 'Hulk',
            value: 'hulk',
            group: 'Male'
          }, {
            name: 'Captain Marvel',
            value: 'captain_marvel',
            group: 'Female'
          }]
        }
      }, {
        key: 'marvel3',
        type: 'select',
        templateOptions: {
          label: 'Select with custom name/value/group',
          options: [{
            label: 'Iron Man',
            id: 'iron_man',
            gender: 'Male'
          }, {
            label: 'Captain America',
            id: 'captain_america',
            gender: 'Male'
          }, {
            label: 'Black Widow',
            id: 'black_widow',
            gender: 'Female'
          }, {
            label: 'Hulk',
            id: 'hulk',
            gender: 'Male'
          }, {
            label: 'Captain Marvel',
            id: 'captain_marvel',
            gender: 'Female'
          }],
          groupProp: 'gender',
          valueProp: 'id',
          labelProp: 'label'
        }
      }, {
        key: 'marvel3',
        type: 'select',
        templateOptions: {
          label: 'Custom ng-options',
          options: [{
            label: 'Iron Man',
            id: 'iron_man',
            gender: 'Male'
          }, {
            label: 'Captain America',
            id: 'captain_america',
            gender: 'Male'
          }, {
            label: 'Black Widow',
            id: 'black_widow',
            gender: 'Female'
          }, {
            label: 'Hulk',
            id: 'hulk',
            gender: 'Male'
          }, {
            label: 'Captain Marvel',
            id: 'captain_marvel',
            gender: 'Female'
          }],
          ngOptions: 'option as option.label group by option.gender for option in to.options'
        }
      }, {
        type: 'btnPOST',
        templateOptions: {
          text: 'With Function',
          onClick: SimplePost
        }
      }
    ];

    function SimplePost() {
      // функция есть в конфиги и подхватывает контроллер
      alert(vm.model);
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
