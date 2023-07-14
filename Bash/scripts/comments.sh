#!/bin/bash

echo "This script demonstrates comments"

#Im a single line comment. I wont be executed

echo "The single-line comment was skipped"

: '
Im a multi-line comment
Will I be executed? Find out for yourself
date; ls
'

echo "End of program"
