#!/usr/bin/env bash

set -e

gen_diff() {
  original=node_modules/react-scripts/config/webpack.config.js
  updated=webpack.config.js
  diff -Nau $original $updated >webpack.config.js.patch
}

apply_diff() {
  patch -p0 node_modules/react-scripts/config/webpack.config.js <webpack.config.js.patch
}

apply_diff
