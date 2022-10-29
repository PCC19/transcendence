#!/bin/bash

# Make updates and upgrades
apk update
apk upgrade

#Install some tools (vim wget openssl man)
apk add bash
apk add vim

#apt-get install -y vim man procps bash

#Install NodeJS
#apt-get install -y nvm

