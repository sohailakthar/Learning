#!/bin/bash
if [[ $# -gt 0 ]]
then
	if [[ $1 -lt 18 && $1 -ge 0 ]]
	then
		echo "You are minor!"
	elif [[ $1 -eq 18 ]]
	then
		echo "Congratulations! You've just become major"
	elif [[ $1 -gt 18 && $1 -lt 100 ]]
	then
		echo "You are major!"
	else
		echo "Invalid age!"
	fi
else
	echo "Please provide an argument"
fi
