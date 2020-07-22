FROM node:12.16.3

WORKDIR /app

COPY LICENSE.md ./
COPY package-lock.json package.json ./

RUN npm install

COPY tsconfig.json baseTSConfig.json global.d.ts webpack.config.js nodemon.json ./
COPY out ./out
COPY source ./source

# RUN npm run build

# CMD node out/app/GameServer.js
