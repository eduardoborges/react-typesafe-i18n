#!/bin/bash

# all package scripts
# to not polute package.json file
# with long scripts

cmd=$1
args=${@:2}

function dev() {
  echo "🚀 Starting dev server...";
  pnpx rollup -c --watch;
};

function build() {
  echo "📦 Building package...";
  rm -rf dist;
  pnpx rollup -c;
};

function prepare() {
  echo "📦 Preparing package...";
  pnpx rollup build
};

function test() {
  echo "🧪 Running tests...";
  pnpx vitest;
};

eval $cmd $args
