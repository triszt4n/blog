#!/bin/bash

# usage: bash work.sh '<title>'

DIR=src/content/works

# checking args
if [ $# != 1 ]; then
    echo 'Error! Usage: bash work.sh "<title>"'
    exit -1
fi

# creating variables
title=$1
escapedtitle=`echo $title | tr '[:upper:]' '[:lower:]' | sed -e 's/á/a/g;s/é/e/g;s/í/i/g;s/ó/o/g;s/ö/o/g;s/ő/o/g;s/ú/u/g;s/ü/u/g;s/ű/u/g;s/ /-/g'`
filename=$escapedtitle'.md'
filepath=$DIR/$filename

# creating posttemplate
touch $filepath
echo '---' >> $filepath
echo 'layout: work' >> $filepath
echo 'title: "'$title'"' >> $filepath
echo 'lead: ""' >> $filepath
echo 'url: ""' >> $filepath
echo 'status: { label: "Active", color: "green" }' >> $filepath
echo 'techs: []' >> $filepath
echo 'featuredImage: null' >> $filepath
echo '---' >> $filepath
