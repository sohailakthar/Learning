#!/bin/bash
if [[ $# -ne 2 ]]
then
	echo "Please provide two arguments: SignalNumber and ProcessID"
	exit 1
fi

case $1 in
1)
	echo "Sending SIGHUP signal to PID-$2"
	kill -SIGHUP $2
	;;
2)
	echo "Sending SIGINT signal to PID-$2"
	kill -SIGINT $2
	;;
15)
	echo "Sending SIGTERM signal to PID-$2"
	kill -SIGTERM $2
	;;
*)
	echo "Cannot send this signal"
esac
