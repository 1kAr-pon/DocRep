#!/bin/bash
sudo firewall-cmd --add-port=$1/tcp
sudo firewall-cmd --reload
