#!/bin/bash
PS3="Enter your choice: "
IFS=':'
OPTIONS="Add user":"Remove user":"List all processes":"Kill process":"Install program":"Remove program":"Quit"

select OPTION in $OPTIONS
do
	case $REPLY in
	1)
		read -p "Enter username: " username
		output="$(grep -w $username /etc/passwd)"
		if [[ -n $output ]]
		then
			echo "Username already exists!"
		else
			echo "Adding user..."
			sudo useradd $username
			if [[ $? -ne 0 ]]
			then
				echo "Adding user failed."
			else
				echo "User added successfully."
			fi
		fi
		;;
	2)
		read -p "Enter username: " username
		output="$(grep -w $username /etc/passwd)"
		if [[ -n $output ]]
		then
			echo "Removing user..."
			sudo userdel $username
			if [[ $? -ne 0 ]]
			then
				echo "Remove user failed."
			else
				echo "Removed user successfully."
			fi
		else
			echo "User doesn't exist."
		fi
		;;
	3)
		ps -aux
		;;
	4)
		read -p "Enter process id: " pid
		if [[ -n $pid ]]
		then
			echo "Killing the process with pid-$pid"
			kill -9 $pid
			if [[ $? -ne 0 ]]
			then
				echo "Killing process unsuccessful."
			else
				echo "Killed process successfully."
			fi
		else
			echo "Please enter a valid PID"
		fi
		;;
	5)
		read -p "Enter app name: " appname
		if [[ -n $appname ]]
		then
			echo "Installing app...."
			sudo apt install $appname
			if [[ $? -ne 0 ]]
			then
				echo "Install failed."
			else
				echo "Installed successfully."
			fi
		else
			echo "Please enter a valid app name"
		fi
		;;
	6)
		read -p "Enter app name to remove: " appname
		output="$(apt list 2> /dev/null | grep $appname)"
		if [[ -n output ]]
		then
			echo "Removing app..."
			sudo apt remove $appname
			if [[ $? -ne 0 ]]
			then
				echo "Remove failed."
			else
				echo "Successfully removed."
			fi
		else
			echo "App not found"
		fi
		;;
	7)
		echo "Qutting..."
		sleep 1
		exit
		;;
	*)
		echo "Invalid input"
		;;
	esac
done
