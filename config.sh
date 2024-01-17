#!/bin/bash

bash firewall.sh 3133

if [ -z $1 ]
then    
    bash install.sh
    sudo systemctl enable docker
    sudo systemctl start docker
else
    if [ $1 = "--skip" ] 
    then
        echo docker installation skipped
    	sudo systemctl enable docker
    	sudo systemctl start docker
    else
        echo wrong key, process finished, try again
    fi
fi


