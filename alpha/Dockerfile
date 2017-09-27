FROM node:8.6.0

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install && npm run build && npm install -g serve
