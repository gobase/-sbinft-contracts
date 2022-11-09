#!/bin/bash

# Remove all sub-directories of packages/sbinft-contracts
cd packages/sbinft-contracts
ls -d */ | xargs rm -rf
cd ../..

# Copy files from development to packages/sbinft-contracts
rsync -avh --progress contracts/* packages/sbinft-contracts --exclude mocks/* --exclude upgradeable/mocks/*
rsync -avh --progress abi packages/sbinft-contracts
rsync -avh --progress address packages/sbinft-contracts
