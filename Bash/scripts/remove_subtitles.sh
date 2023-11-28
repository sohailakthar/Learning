#!/bin/bash
while read directory
do
	cd "${directory}"
	rm *srt
	cd ..
done <<< "$(ls -d */)"
