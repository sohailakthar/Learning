#!/bin/bash
ls | cat > folders.txt
IFS=$'\n'
while read folder
do
	cp rename_subtitle_files_SCRIPT.sh ./$folder
	cd $folder
	./rename_subtitle_files_SCRIPT.sh
	sleep 2
	rm rename_subtitle_files_SCRIPT.sh
	cd ..
done < ./folders.txt
rm folders.txt
