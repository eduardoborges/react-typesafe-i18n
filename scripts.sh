#!/bin/bash

# all package scripts
# to not polute package.json file
# with long scripts

cmd=$1
args=${@:2}

function dev() {
  echo "🚀 Starting dev server...";
  npx rollup -c --watch;
};

function build() {
  echo "📦 Building package...";
  rm -rf dist;
  npx rollup -c;
};

function prepare() {
  echo "📦 Preparing package...";
  npx rollup -c
};

function test() {
  echo "🧪 Running tests...";
  npx vitest;
};

eval $cmd $args
