# test-app-json

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

## Build & development
Run `grunt` for building and `grunt serve` for preview.

## Инструкция
Файл
`/app/scripts/controllers/form.js`

там находиться конфиг
`
var vm = this;
    vm.model = {};
    vm.options = {};
    vm.htmlEditor = '...';
    `
`    
    var myConfig = []; это массив обектов
`

[Тут больше информации](https://github.com/kaflan/jsonFormyly/blob/master/app/scripts/controllers/form.js)

Чтобы добавить новый елемент  нужно сделать html шаблон [вот как тут ](https://github.com/kaflan/jsonFormyly/blob/master/app/index.html)
или вот кусок кода отуда

`<script type="text/ng-template" id="number.html">
 <div ckeditor="options" ng-model="content" ready="onReady()">
  `

  `</div>
 </script>`

 Вот так его подхватывает ангуляр и вставляет

 `angular`
  `.module('testAppJsonApp', [`
    `'ngAnimate',`
    `'ngAria',`
    `'ngCookies',`
    `... еще модули ,`
    `'formly', модуль который подключает нужный ангулярный плагин`
    `'formlyBootstrap его бутстрап',`
    `'ckeditor', //  иногда есть решение которые легко интегрированы в ангуляр один едитор`
     `'ui.ace' второй едитор(если нужно будет больше сделаем)`
  ],
  `  function config(formlyConfigProvider) {`
  `  // set templates here `
    `  formlyConfigProvider.setType({
        name: 'custom',
        extends: 'textarea',
        templateUrl: 'number.html'
      });
      `

    указываем в конфиге провайдера, что где подключать и как, ангуляр сам все найдет, главное templateUrl которое совпадает с ID которое вы указали на странице главной
    `index.html`. Имя будет наследоваться уже контролеером.  
[Сылка на код ](https://github.com/kaflan/jsonFormyly/blob/master/app/scripts/app.js)
