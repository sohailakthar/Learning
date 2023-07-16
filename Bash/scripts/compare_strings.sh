#!/bin/bash
read -p "String1: " str1
read -p "String2: " str2

if [ "$str1" = "$str2" ]
then
	echo "String1 equals String2"
else
	echo "String1 does not equal String2"
fi

if [[ $str1 == $str2 ]]
then
	echo "String1 equals String2"
else
	echo "String1 does not equal String2"
fi


if [ "$str1" != "$str2" ]
then
	echo "Strings are not equal"
else
	echo "Strings are equal"
fi

if [[ $str1 != $str2 ]]
then
	echo "Strings are not equal"
else
	echo "Strings are equal"
fi
