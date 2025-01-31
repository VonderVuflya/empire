# Используем Node.js как базовый образ
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения
COPY . .

ARG PORT
EXPOSE ${PORT:-4321}

# Собираем приложение
CMD ["npm", "run", "preview"]