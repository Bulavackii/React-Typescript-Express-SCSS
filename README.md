**Команды для разработки**
`Фронтенд`

# Запуск фронтенда:
npm run start-f

# Сборка
npm run build

# Проверка фронтенда на ошибки с помощью ESLint:
npm run lint-frontend

# Исправление ошибок ESLint во фронтенде:
npm run lint-fix-frontend

# Форматирование фронтенд-кода с помощью Prettier:
npm run format-frontend

**Бэкенд**

# Запуск бэкенда:
npm run start-b

# Сборка бэкенда:
npm run build

# Проверка бэкенда на ошибки с помощью ESLint:
npm run lint-backend

# Исправление ошибок ESLint в бэкенде:
npm run lint-fix-backend

# Форматирование бэкенд-кода с помощью Prettier:
npm run format-backend

**Команды Docker**
# Сборка Docker-образов для всех сервисов:
npm run docker-build

# Запуск Docker-контейнеров
npm run docker-up

# Остановка и удаление Docker-контейнеров:
npm run docker-down


docker-compose build --no-cache

docker ps -a

docker-compose up -d

docker exec -it 246dc0925551 /bin/sh

ls /usr/share/nginx/html