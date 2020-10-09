# Тестовое задание Студия Т_Г


### Общие требования:

- задание можно выложить на github, gitlab или в облако
- апи для работы: https://randomuser.me
- цвета, шрифты, полосы и тд – на свой вкус. Главное, чтобы в целом приложение выглядело как на картинке
- Список должен поддерживать Infinite Scroll
- Список должен поддерживать Pull Down To Refresh
- При клике показать модал с информацией по пользователю (любую) в любом удобном для Вас виде
- При клике на кнопку обновить (в заголовке справа) – список полностью обновляется
- При клике на кнопку сердечко (в заголовке слева) – рандомным образом выбирается один из пользователей из текущего списка и в Alert выводится его Имя и email

Смотри файл Задача по React Native.docx


### Отход от требований:

- Когда сделал сделал приложение, в API заметил, что нет запроса о конкретном пользователе. Поэтому поля с возрастом и телефоном у всех пользователей одинаково.


### Архитектура

    /* Тут должно расти дерево */

- Приложение строится на паттернах State и Factory. Отталкиваясь от них, расширяем приложение.

Так же по стандарту:

- В components лежат react-components. (В каждой папке лежит файл index и style)
- Redux для редакса и т.д.
- В каждом подкаталоге (interfaces, components...) лежит файл index где хранятся ссылки на объекты.


### Установка

Установка зависимостей.

```sh
$ npm install --global expo-cli
$ npm install
```

**Удачи!**

[api_profile]: https://randomuser.me
