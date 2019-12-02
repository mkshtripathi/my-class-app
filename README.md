# MyClassApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.
This is a sample app written in Angular 8 and deployed in a docker container.

## Build a docker image
docker build -t angular-docker-image .

## Run a docker image -v is for volume mounting for webpack to recompile app if any change is made to the code
docker run -it -v ${PWD}:/docker-angular -p 80:4200 angular-docker-image

## some basic Git commands
A new repo from scratch, Say you’ve just got some data from a collaborator and are about to start exploring it.
    Create a directory to contain the project.
    Go into the new directory.
    Type git init.
    Write some code.
    Type git add to add the files (see the typical use page).
    Type git commit.
    The first file to create (and add and commit) is probably a ReadMe file, either as plain text or with Markdown, describing the project.

Markdown allows you to add a bit of text markup, like hyperlinks, bold/italics, or to indicate code with a monospace font. Markdown is easily converted to html for viewing in a web browser, and GitHub will do this for you automatically.

A new repo from an existing project
    Say you’ve got an existing project that you want to start tracking with git.
    Go into the directory containing the project.
    git init.
    git add . to add all of the relevant files.
    You’ll probably want to create a .gitignore file right away, to indicate all of the files you don’t want to track. Use git add .gitignore, too.
    Type git commit.
    Connect it to github
    You’ve now got a local git repository. You can use git locally, like that, if you want. But if you want the thing to have a home on github, do the following.

    Go to github.
    Log in to your account.
    Click the new repository button in the top-right. You’ll have an option there to initialize the repository with a README file, but I don’t.
    Click the “Create repository” button.
    Now, follow the second set of instructions, “Push an existing repository…”

    $ git remote add origin https://github.com/mkshtripathi/my-class-app
    $ git push -u origin master
    Actually, the first line of the instructions will say

    $ git remote add origin https://github.com/username/new_repo


