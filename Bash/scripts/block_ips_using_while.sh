#!/bin/bash
while read line
do
	echo "Dropping packets from $line"
	iptables -I INPUT -s $line -j DROP
done< ./malicious_ips.txt
