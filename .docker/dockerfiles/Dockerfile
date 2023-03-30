FROM node:16-alpine

RUN apk add --no-cache git bash

WORKDIR /usr/movue-it-nuxt/app

USER node

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

EXPOSE 3000
