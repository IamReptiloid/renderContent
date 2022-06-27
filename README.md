# render content
### О задание
***
Отобразить UI на основе данных, которые вводит пользователь.
### Доступные скрипты
***
### `npm start`
Запуск приложения
### `npm test`
Запуск тестов

### Описание
***
В поле «Путь» вводим строку, в которой задаем путь внутри объекта. 
Формат вводимых данных: 'content[2].props.caption', "content[2].props.caption", content[2].props.caption. 
«Путь» также валидируется, если ввести ошибочный путь, то данное поле будет подсвечено. Например: content[2].test

В поле «Новое значение» указываем новое значение данного свойства. 
Формат вводимых данных:
+ Строка: 'test', "test", test. 
+ Число: 111. 
+ Объект: 
```js
{'test': value}
{test: value}
{"test": value}
```
«Новое значение» также валидируется в зависимости от компонета, к которому применяется новое значение.

### Примеры задания допустимого контента
***
```js
// добавляет объект в content
Путь: 
Новое значение: {type: "panel",props:{width:123}, content: [{type: "label", props:{caption:"12445"}}]} 

// добавляет объект в content
Путь: content
Новое значение: {type: "panel",props:{width:123}, content: [{type: "label", props:{caption:"12445"}}]} 

// Добавит массив объектов в content
Путь: 
Новое значение: [{type: "panel",props:{width:123}, content: [{type: "label", props:{caption:"12445"}}]}]

//Если content[0] это компонент panel, то добавит объект в его content
Путь: content[0].content 
Новое значение:{type: "panel",props:{width:123}, content: [{type: "label", props:{caption:"12445"}}]}

//Если content[0] это компонент panel, то добавит массив объектов в его content
Путь: content[0].content 
Новое значение:[{type: "panel",props:{width:123}, content: [{type: "label", props:{caption:"12445"}}]}]

//Изменит объект props у компонента, если даное свойство есть у компонента и новое значение валидно
Путь: content[0].props
Новое значение: {width: 123}

//Изменит свойство props компонента, если даное свойство есть у компонента и новое значение валидно
Путь: content[0].props.width
Новое значение: 123
```

### Примеры задания недопустимого контента
***
```js
// Ошибка, так как в свойстве width строка  
Путь: 
Новое значение: {type: "panel",props:{width:'123'}, content: [{type: "label", props:{caption:"12445"}}]} 

// Если content[1] не компонент panel, то будет ошибка
Путь: content[1].content
Новое значение: {type: "panel",props:{width:123}, content: [{type: "label", props:{caption:"12445"}}]}

//Если у компонента content[0] нет свойства width, то будет ошибка
Путь: content[0].props
Новое значение: {width:123}

//Ошибка, так как в свойстве width строка
Путь: content[0].props
Новое значение: {width:}

//Ошибка, так как нет такого типа, как test
Путь: content[0].type
Новое значение: test

//Ошибка, так как в свойстве width строка
Путь: content[0].props.width
Новое значение: '123'
```
