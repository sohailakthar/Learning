#!/bin/bash
greatest=$1
for val in "$@"
do
	if [[ $greatest -lt $val ]]
	then
		greatest=$val
	fi
done
if [[ $# -eq 0 ]]
then
	echo "Erro: No arguments passed"
else
	echo "Largest value is: $greatest"
fi
