#!/bin/bash
echo "0. Script name (\$0) is $0"
echo "1. The value of positional argument (\$1) is ${1:-MISSING_ARG_1}"
echo "2. The value of positional argument (\$2) is ${2:-MISSING_ARG_2}"
echo "3. The value of positional argument (\$3) is ${3:-MISSING_ARG_3}"
echo "4. The value of positional argument (\$4) is ${4:-MISSING_ARG_4}"
