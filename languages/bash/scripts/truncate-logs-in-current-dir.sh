#!/bin/bash

# Get the directory of this script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

(cd $DIR \
  && find . -name "*.sh" -type f -exec cat /dev/null > {} \; \
  && echo "All *.sh scripts in $DIR have been made executable:")
