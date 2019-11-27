FROM node:12.13.1 AS builder
RUN npm install -g @angular/cli@8.3.19
COPY . ./docker-angular
WORKDIR ../docker-angular
CMD ng serve --host 0.0.0.0 --port 4200




