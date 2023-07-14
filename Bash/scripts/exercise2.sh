#!/bin/bash
read -p "Enter IP, Network or Domain to drop: " ip
echo "Blocking connections from $ip"
sleep 1

iptables -I INPUT -s $ip -j DROP

echo "Done"
