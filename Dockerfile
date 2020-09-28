FROM node:12.16.3

WORKDIR /app

COPY LICENSE.md ./
COPY package-lock.json package.json ./

RUN npm install --only=production
RUN npm install nodemon -g

COPY tsconfig.json tsconfig.base.json nodemon.json ./
COPY out ./out
COPY source ./source
