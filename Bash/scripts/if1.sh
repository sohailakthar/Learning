#!/bin/bash
if [ -f "$1" ]
then
    echo "The argument ($1) is a file, displaying its contents..."
    sleep 1
    cat $1
elif [ -d "$1" ]
then
    echo "The argument ($1) is a directory."
else
    echo "The argument ($1) is neither a file nor a directory."
fi
