#! /bin/bash
echo
echo 
echo 
echo -n "------ ** PASS THE FILE TO BE DECRYPTED"
echo 
echo

filename=$1
if [[ ! -z "$filename" ]];then
newname=$(echo "decrpyted_$filename" | cut -f 1 -d '.')
echo $newname
gpg -o $newname -d $filename
echo -n "DECRYPTED FILE NAME $newname"
else
echo -n "Read the message at the top"
fi
