# build chat
FROM node:lts-alpine AS chat

RUN npm install pnpm -g

WORKDIR /app

COPY /chat/package.json /app

RUN pnpm install

COPY /chat /app

RUN pnpm build

# build admin
FROM node:lts-alpine AS admin

RUN npm install pnpm -g

WORKDIR /app

COPY /admin/package.json /app

RUN pnpm install

COPY /admin /app

RUN pnpm build

# build service
FROM node:lts-alpine AS service

RUN npm install pnpm -g

WORKDIR /app

COPY /service/package.json /app

RUN pnpm install

COPY /service /app

RUN pnpm build

# build final image
FROM node:lts-alpine

RUN npm install pnpm -g

WORKDIR /app

COPY /service/package.json /app

RUN pnpm install

COPY /YiAiQuickDeploy /app

RUN rm -rf ./dist/* ./public/* ./templates/*

RUN mkdir -p ./dist ./public/admin ./templates

COPY /service/pm2.conf.json /app

COPY /service/package.json /app

COPY /service/README.md /app

COPY /service/.env.example /app

COPY /service/templates /app/templates

COPY --from=chat /app/dist /app/public

COPY --from=admin /app/dist /app/public/admin

COPY --from=service /app/dist /app/dist

EXPOSE 9520

CMD ["pnpm", "start"]