#! /bin/bash
Sender_User_Name=$1
Receiver_User_Name=$2
filename=$3

gpg -e -u "$Sender_User_Name" -r "$Receiver_User_Name" $filename

