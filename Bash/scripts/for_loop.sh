#!/bin/bash
read -p "Enter n: " num
for i in {1..10}
do
	echo $num x $i = $(echo $num*$i | bc)
done
echo
