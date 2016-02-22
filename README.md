# Demo for Kolab workshop 27.02.2016

## Prerequisites
### Install Docker-compose
#### Windows installation
https://docs.docker.com/engine/installation/windows/
#### Mac OS X installation
https://docs.docker.com/engine/installation/mac/
#### Other systems
https://docs.docker.com/compose/install/

## How to run this demo
```bash
$ git clone https://github.com/kolabdigital/workshop-27.02.2016.git
$ cd workshop-27.02.2016
$ docker-compose up -d
```
When containers are runnging check docker machine ip and open it in browser
```bash
$ docker-machine ip default
```
## Drupal login info
```
user: admin
password: admin
```

## Module info
Module files that we will work on are stored inside:
```bash
www/drupal7/sites/all/modules/custom/kolab_news
```
