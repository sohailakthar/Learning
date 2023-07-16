#!/bin/bash
PS3="Enter your choice: "

OPTIONS='India Bangladesh Pakistan "United States" Quit'
select COUNTRY in $OPTIONS
do
	case $REPLY in
	1)
		echo "You probably speak Hindi"
		;;
	2)
		echo "You speak Bangla"
		;;
	3)
		echo "You speak Urdu"
		;;
	4)
		echo "You speak American English"
		;;
	5)
		echo "Qutting..."
		sleep 1
		exit
		;;
	*)
		echo "Invalid choice"
		;;
	esac
done
