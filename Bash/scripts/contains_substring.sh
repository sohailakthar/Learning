#!/bin/bash
statement="the big brown fox jumped over the lazy dog"
echo "The statement is: $statement"

if [[ $# -gt 0 ]]
then
	if [[ $statement == *$1* ]]
	then
		echo "true. $1 is a substring of this statement."
	else
		echo "false. $1 is NOT a substring of this statement."
	fi
else
	echo "Please provide an argument"
fi
