#!/bin/bash

# Get the directory of this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

logs=(lorem.log ipsum.log)

for log in "${logs[@]}"; do
  mkdir -p "$DIR/logs"
  logpath="$DIR/logs/$log"
  touch "$logpath" && curl https://loripsum.net/api/10/plaintext >> "$logpath"
  echo "lorem text concatenated to: $logpath"
done
