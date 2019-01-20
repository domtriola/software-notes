#!/bin/bash

# Get the directory of this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Wrap a command in () to execute in a subshell environment to maintain the
# same existing shell environment after the command is run
(cd $DIR \
  && find . -name "*.sh" -type f -exec chmod 0700 {} \; \
  && echo "All *.sh scripts in $DIR have been made executable:" \
  && find . -name "*.sh" -type f -exec ls -al {} \;)
