FROM node:16

RUN apt-get update
COPY ./portfolio-node /app
WORKDIR /app

RUN npm i -g @nestjs/cli
RUN npm install
