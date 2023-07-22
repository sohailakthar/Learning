#!/bin/bash
rev=0
read -p "Enter number: " num

if [[ ${#num} -eq 1 ]]
then
	echo "Error: pass a multi-digit number"
	exit
fi


while [[ $num -gt 0 ]]
do
	rev=$(expr $rev \* 10)
	k=$(expr $num % 10)
	rev=$(expr $rev + $k)
	num=$(expr $num / 10)
done

echo $rev
