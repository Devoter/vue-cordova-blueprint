#!/bin/bash

source cordova-env

rm -f $RESULT
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $KEYSTORE $OUTPUTS/app-release-unsigned.apk $SIGNER <<< "$PASSPHRASE"

# verify package, this must output "jar verified."
jarsigner -verify -verbose -certs $OUTPUTS/app-release-unsigned.apk

# build final release package
$ZIPALIGN -v 4 $OUTPUTS/app-release-unsigned.apk $RESULT
