#!/usr/bin/bash

# Run static check
if [ $(python StaticCheck.py) = 0 ]; then
    echo 'Header comment not present in all *.ts files, aborting...'
    exit 2
fi
echo 'Static check passed!'

# Run build
npm install
npm run build
cd src/__tests__
npm run test
cd ../../../
echo Complete!

git add .
git commit -m $1
git push origin master
git status