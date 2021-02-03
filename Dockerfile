FROM node:14.15.4-alpine3.12 as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --silent
COPY . /app
RUN npm run build
