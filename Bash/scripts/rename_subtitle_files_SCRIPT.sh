#!/bin/bash
ls *_en.srt | cat > files.txt
IFS=$'\n'
while read line
do
	$newname="${newname//_en}"
	echo
	echo $line
	echo $newname
	echo
	mv $line ./$newname
done < ./files.txt
rm files.txt
