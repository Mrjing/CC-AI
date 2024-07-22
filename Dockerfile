# build chat
FROM node:18.20.4-alpine AS chat

RUN npm install pnpm -g

RUN pnpm config set registry https://registry.npmmirror.com

WORKDIR /app

COPY /chat/package.json /app

COPY /chat/package-lock.json /app

RUN pnpm install

COPY /chat /app

RUN pnpm build

# build admin
FROM node:lts-alpine AS admin

RUN npm config set registry https://registry.npmmirror.com

WORKDIR /app

COPY /admin/package.json /app

RUN npm install

COPY /admin /app

RUN npm build

# build service
FROM node:lts-alpine AS service

RUN npm config set registry https://registry.npmmirror.com

WORKDIR /app

COPY /service/package.json /app

RUN npm install

COPY /service /app

RUN npm build

# build final image
FROM node:lts-alpine

RUN npm config set registry https://registry.npmmirror.com

WORKDIR /app

COPY /service/package.json /app

RUN npm install

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

CMD ["npm", "start"]