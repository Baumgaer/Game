FROM node:10.16.2

WORKDIR /app

COPY LICENSE.md ./

COPY package-lock.json package.json ./

RUN npm ci

COPY tsconfig.json baseTSConfig.json global.d.ts webpack.config.js tslint.json ./
COPY out ./out
COPY source ./source

RUN npm run build

# RUN npm run build

# CMD node out/app/GameServer.js
