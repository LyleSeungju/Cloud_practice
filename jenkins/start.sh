#!/bin/bash

# Nginx 시작
service nginx start

# Jenkins 시작
exec /usr/local/bin/jenkins.sh "$@"
