#!/bin/bash
ls . | cat > folders.txt
IFS=$'\n'
while read folder
do
	mv rename_subtitle_files_SCRIPT.sh ./$folder
	cd $folder
	./rename_subtitle_files_SCRIPT.sh
	mv rename_subtitle_files_SCRIPT.sh ../
	cd ..
done < ./folders.txt
