# webpack-unused-plugin


## Установка

Для работы `webpack-unused-plugin` вам нужно его добавить к себе в проект:

```
$ npm install -S https://github.com/PavelIgnatev/webpack-unused-plugin.git
```

## Использование

Добавьте плагин `webpack-unused-plugin` в ваш конфигурационный файл `webpack.confing.js`:

```js
{
 "plugins": [
    new webpackUnusedFiles(),
 ]
}
```


Затем добавьте свои настройки в плагин, запишите папок/файлов, которые просматривать не нужно, с абсолютным путем от корня репозитория до них:

```js
{
 "plugins": [
    new webpackUnusedFiles(['/dist', '/build']),
 ]
}
```

## Результат работы

Все неиспользуемые файлы будут находиться в unused.json файле в главной дериктории

