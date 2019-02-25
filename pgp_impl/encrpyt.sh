#! /bin/bash

echo "PASS [ SenderUserName (Set When Key Generation), ReceiverUserName , Filename ] as PARAMETERS"

Sender_User_Name=$1
Receiver_User_Name=$2
filename=$3

if [[  !-z"$Sender_User_Name" && !-z"$Receiver_User_Name" && !-z"$filename" ]]; 
then   
	gpg -e -u "$Sender_User_Name" -r "$Receiver_User_Name" $filename
else
	echo "------- Read the message at the top -------"
fi

