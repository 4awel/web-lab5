# Authentication App with Refresh Tokens

Простое приложение с аутентификацией и refresh токенами. Бэкенд на NestJS, фронтенд на чистом JavaScript.

## Технологии

- **Backend**: NestJS, Prisma, SQLite, JWT
- **Frontend**: Vanilla JS, HTML5, CSS3

## Установка и запуск

### Требования
- Node.js (v16 или выше)
- npm

### Бэкенд

\`\`\`bash
cd backend
npm install
npx prisma generate
npx prisma db push
npm run start:dev
\`\`\`

Бэкенд запустится на `http://localhost:3000`

### Фронтенд

\`\`\`bash
cd frontend
npx http-server -p 5500 --cors
\`\`\`

Фронтенд запустится на `http://localhost:5500`

## API Endpoints

- `POST /auth/register` - регистрация пользователя
- `POST /auth/login` - вход
- `POST /auth/refresh` - обновление токенов
- `POST /auth/logout` - выход

## Особенности

- Access token живет 15 минут
- Refresh token живет 7 дней
- Автоматическое обновление токенов при 401 ошибке
- Хранение токенов в localStorage

## Деплой

### На Railway (бэкенд)
1. Создайте аккаунт на [Railway](https://railway.app)
2. Подключите GitHub репозиторий
3. Добавьте переменные окружения
4. Деплой автоматический

### На GitHub Pages (фронтенд)
1. Включите GitHub Pages в настройках репозитория
2. Выберите ветку `main` и папку `/frontend`

## Лицензия

MIT
