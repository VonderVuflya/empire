FROM node:lts-alpine AS base
WORKDIR /app

COPY ./package.json ./package.json ./

FROM base AS build-deps
RUN npm install

FROM build-deps AS build
COPY . .
RUN npx astro telemetry disable
RUN npm run build

FROM nginx:alpine AS runtime
COPY --from=build-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
