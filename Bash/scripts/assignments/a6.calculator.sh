#!/bin/bash
case $2 in
"+")
	echo $(bc <<< "$1 + $3")
	;;
"-")
	echo $(bc <<< "$1 - $3")
	;;
"x")
	echo $(bc <<< "$1 * $3")
	;;
"/")
	echo $(bc <<< "$1 / $3")
	;;
*)
	echo "Invalid operation"
	;;
esac
