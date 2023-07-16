#!/bin/bash
read -p "Enter a string: " str

if [[ -z $str ]]
then
	echo "String is zero length"
else
	echo "String is NOT zero length"
fi


if [[ -n $str ]]
then
	echo "String is NOT zero length"
else
	echo "String is zero length"
fi
