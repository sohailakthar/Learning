#!/bin/bash
echo "Display contents of $1 ..."
sleep 2
cat "$1"

echo "Compressing $1 ..."
sleep 2
tar -cjvf "$1.tar.gz" $1

echo "Done"
