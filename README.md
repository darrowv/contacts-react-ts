# SPA-приложение "Менеджер контактов"

Есть возможности добавления, удаления, редактирования, поиска контактов. Привязана фейковая авторизация с JWT-токеном. Данные хранятся на localStorage.

Данные для авторизации:

<p>Логин: admin
<p>Пароль: admin

## Как запустить

Версия без авторизации для быстрового теста [тут](https://darrowv.github.io/contacts/)

Для начала клонируйте репозиторий.

Затем в терминале сервера (fake-api-jwt-json-server) запустите следующие команды:

```bash
$ npm install
$ npm run start-auth
```
В терминале клиента выполните следующее:

```
$ npm install
$ npm start
```

версия node: v16.14.0.

Для авторизации используйте данные, приведенные выше.

## Стэк проекта

Для фронтэнд части проекта как фреймворк был использован React, как стейт-менеджер Redux Toolkit.
Для стилей использовал CSS-препроцессор Sass. Приложение написано на TypeScript. Для анимаций использовал библиотеку Framer Motion.
Остальное: axios, react-router, react hooks, localStorage и т.д.

Как сервер для реализации авторизации был использован данный репозиторий из открытого доступа: [fake-api-jwt-json-server](https://github.com/techiediaries/fake-api-jwt-json-server)

Автор иконки приложения: [Andrean Prabowo](https://www.flaticon.com/ru/authors/andrean-prabowo)
