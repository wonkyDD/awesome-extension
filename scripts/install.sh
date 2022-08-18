#!/usr/bin/bash

# react
yarn add react react-dom
yarn add -D @types/react @types/react-dom

# typescript 
yarn add -D @types/node
yarn add -D typescript  ts-loader

# babel 
yarn add -D babel-loader @babel/core 
yarn add -D @babel/preset-env @babel/preset-react @babel/preset-typescript

# webpack
yarn add -D webpack webpack-cli webpack-dev-server webpack-merge
yarn add -D html-webpack-plugin clean-webpack-plugin

# eslint : npx install-peerdeps --dev eslint-config-airbnb 로도 가능
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
yarn add -D eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
yarn add -D eslint-config-airbnb
 
# prettier
yarn add -D prettier 
yarn add -D eslint-config-prettier eslint-plugin-prettier
