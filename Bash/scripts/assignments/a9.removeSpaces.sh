filecontent="$(grep -Ev "^$" $1)"
echo $filecontent > $1
