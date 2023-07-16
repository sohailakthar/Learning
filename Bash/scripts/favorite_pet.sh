#!/bin/bash
read -p "Enter your favorite pet: " pet

case $pet in
"dog")
	echo "Your fav pet is dog."
	;;
cat | Cat | kitty)
	echo "You like cats."
	;;
fish | "African turtle")
	echo "Fish or turtles are great!"
	;;
*)
	echo "Your favorite pet is unknown"
esac
