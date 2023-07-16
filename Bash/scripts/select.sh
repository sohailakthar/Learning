#!/bin/bash
PS3="Enter your choice: "

select COUNTRY in India Pakistan Bangladesh "United States"
do
	echo "Your country is $COUNTRY"
	echo "REPLY is $REPLY"
done
