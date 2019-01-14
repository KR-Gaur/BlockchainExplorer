#! /bin/bash

filename=$1
newname=$(echo "decrypted_$filename" | cut -f 1 -d '.')
echo $newname
gpg -o $newname -d $filename
