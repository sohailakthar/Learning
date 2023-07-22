#!/bin/bash
read -p "Enter the numbers for addition: " num1 num2
sum=$(bc <<< "($num1+$num2)")
echo "Addition is: $sum"
