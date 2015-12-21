# test-app-json
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular) version 0.14.0.

## Build & development
Run `grunt` for building and `grunt serve` for preview.

## Инструкция
### Чтоб подключить функционал на страницу нужно подключить следующие скрипты

```
<script src="//npmcdn.com/api-check@latest/dist/api-check.js"></script>
  <!-- This is the latest version of angular (at the time this template was created) -->
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.js"></script>
    <!-- This is the current state of master for formly core. -->
    <script src="//npmcdn.com/angular-formly@latest/dist/formly.js"></script>
    <!-- This is the current state of master for the bootstrap templates -->
    <script src="//npmcdn.com/angular-formly-templates-bootstrap@latest/dist/angular-formly-templates-bootstrap.js"></script>
```

### Стили

```
 <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css" rel="stylesheet">
```

Файл `/app/scripts/controllers/form.js`

### Чтоб форму вывести нужно наваять конфиг  в контроллере:

```
angular.module('testAppJsonApp')
  .controller('FormCtrl', function () {
 var vm = this;  
    vm.model = {};
    vm.options = {};
    vm.htmlEditor = '...';
    var myConfig = []; //это массив обектов(конфиг)
```

### Конфиг составляется из объектов. Объекты могут быть такие, базовые к примеру.

```
 textarea
 {
        key: 'text',
        type: 'textarea',
        templateOptions: {
          label: 'Text',
          placeholder: 'Formly is terrific!'
        }
      }
 checkbox
 {
        key: 'awesome',
        type: 'checkbox',
        templateOptions: { label: '' },
  }
  input
  {
         key: 'input',
         type: 'input',
         templateOptions: { label: '' },
   }
```

[Тут больше информации](https://github.com/kaflan/jsonFormyly/blob/master/app/scripts/controllers/form.js)
#### Чтоб добавить новый объект-поле нужно
Чтобы добавить новый елемент  нужно сделать html шаблон [вот как тут ](https://github.com/kaflan/jsonFormyly/blob/master/app/index.html)
или вот кусок кода отуда

`<script type="text/ng-template" id="number.html">  <div ckeditor="options" ng-model="content" ready="onReady()">`

  `</div>  </script>`
 или оно должноиметь такой вид
 ~~~
 <script type="text/ng-template" здесь мы указываем ангуляру чтобы он знал что за щаблон брать id="имяшаблона.html">
 тут собственно сам шаблон к примеру
  <div ckeditor="options" ng-model="content" ready="onReady()">
 </script>
 ~~~

 Вот так его подхватывает ангуляр и вставляет

 `angular`   `.module('testAppJsonApp', [`     `'ngAnimate',`     `'ngAria',`     `'ngCookies',`     `... еще модули ,`     `'formly', модуль который подключает нужный ангулярный плагин`     `'formlyBootstrap его бутстрап',`     `'ckeditor', //  иногда есть решение которые легко интегрированы в ангуляр один едитор`      `'ui.ace' второй едитор(если нужно будет больше сделаем)`   ],   `function config(formlyConfigProvider) {`   `// set templates here`     `formlyConfigProvider.setType({         name: 'custom',         extends: 'textarea',         templateUrl: 'number.html'       });`

```
указываем в конфиге провайдера, что где подключать и как, ангуляр сам все найдет, главное templateUrl которое совпадает с ID которое вы указали на странице главной
`index.html`. Имя будет наследоваться уже контролеером.
```

[Сылка на код ](https://github.com/kaflan/jsonFormyly/blob/master/app/scripts/app.js)
