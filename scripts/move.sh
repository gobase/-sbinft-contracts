#!/bin/bash

# Remove all sub-directories of packages/sbinft-contracts
cd packages/sbinft-contracts
ls -d */ | xargs rm -rf
cd ../..

# Copy files from development to packages/sbinft-contracts
cp -R contracts/* packages/sbinft-contracts
