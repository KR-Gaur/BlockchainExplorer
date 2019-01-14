#! /bin/bash

user_ID=$1
key_type=$2
bits=$3
passphrase=$4

gpg --gen-key #$user_ID --key-type RSA --bits 2048 --passphrase $passphrase

gpg --export -a $user_ID > public$user_ID.key
gpg --export-secret-key -a $user_ID > private$user_ID.key

gpg --import public$user_ID.key
gpg --allow-secret-key-import --import private$user_ID.key

gpg --list-keys

