#!/bin/bash

set -e

cd service/
pnpm build
cd ..

rm -rf YiAiQuickDeploy/dist/* YiAiQuickDeploy/templates/*

mkdir -p YiAiQuickDeploy/dist YiAiQuickDeploy/templates

cp service/pm2.conf.json YiAiQuickDeploy/pm2.conf.json
cp service/package.json YiAiQuickDeploy/package.json
cp service/README.md YiAiQuickDeploy/README.md
cp service/.env.example YiAiQuickDeploy/.env.example

cp -r service/templates/* YiAiQuickDeploy/templates
cp -r service/dist/* YiAiQuickDeploy/dist

echo "service 打包完成"