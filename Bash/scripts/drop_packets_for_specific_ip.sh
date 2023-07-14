#!/bin/bash
read -p "Enter IP for which to block pakcets: " ip
iptables -I INPUT -s $ip -j DROP

