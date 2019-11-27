# MyClassApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.
This is a sample app written in Angular 8 and deployed in a docker container.

## Build a docker image
docker build -t angular-docker-image .

## Run a docker image -v is for volume mounting for webpack to recompile app if any change is made to the code
docker run -it -v ${PWD}:/docker-angular -p 80:4200 angular-docker-image