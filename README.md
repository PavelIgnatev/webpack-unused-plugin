# webpack-unused-plugin


## Установка

Для работы `webpack-unused-plugin` вам нужно его добавить к себе в проект:

```
$ npm install -S https://github.com/PavelIgnatev/webpack-unused-plugin.git
```

## Использование

1) Импортируйте плагин в ваш файл `webpack.confing.js`:

    ```js
    const webpackUnusedFiles = require('webpack-unused-plugin')
    ```


2) Добавьте плагин `webpack-unused-plugin` в настройки конфигурационного файла `webpack.confing.js`:

    ```js
    {
     "plugins": [
        new webpackUnusedFiles(),
     ]
    }
    ```


3) Затем добавьте дополнительные настройки для игнорирования папок/файлов при работе плагина:

    ```js
    {
     "plugins": [
        new webpackUnusedFiles(['dist', 'build', 'components/index.js']),
     ]
    }
    ```

## Результат работы

Все неиспользуемые файлы будут находиться в unused.json файле в главной дериктории

