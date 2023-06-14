#!/bin/sh
# this script is run by azure as soon as the app is deployed

# install npm dependencies
echo "Installing NPM dependencies..."
cd ./frontend || exit
npm install
cd ../backend || exit
npm install
cd ../
echo "Success! NPM dependencies are now installed. Starting the app..."
# call pm2 to start the node server
pm2 start ecosystem.config.js --no-daemon
