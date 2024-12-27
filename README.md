Hooks & Context API
===

[![Build status](https://ci.appveyor.com/api/projects/status/bqv1nq92ronpku6x?svg=true)](https://ci.appveyor.com/project/Rail-G/react-hook-frontend)

Выполнены и представлены на проверку следующие задачи:

1. [useEffect](src/tsx/use-effect).
1. [useJsonFetch](src/tsx/useJsonFetch).
1. [authentication](src/tsx/authentication) — необязательная задача.

~~Все три задачи лучше сдавать в разных репозиториях, то есть через create-react-app реализовать три проекта, чтобы не
было конфликта стилей. Но если вы позаботитесь о том, что конфликта не будет, то можете сдавать и в одном проекте.~~

#### Альтернативный способ создания приложения React с использованием тулинга Vite

Приложение также можно создать используя инструмент Vite.
Документация по созданию приложения [React](https://vitejs.dev/guide/).

1. Откройте терминал и пропишите следующую команду: `yarn create vite my-app --template react`,
   либо `yarn create vite my-app --template react-ts`, если
   нужен шаблон с TypeScript. Эта команда создаст настроенный
   шаблонный проект.
2. Откройте созданный проект в своей IDE.
3. Установите зависимости.
4. Готово. Чтобы запустить приложение, введите команду: `yarn dev`(либо `npm run dev`).