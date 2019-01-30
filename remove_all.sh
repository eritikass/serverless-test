#!/bin/sh

root=$(pwd)

remove() {
  local dir=$1
  echo "remove-> $dir"
  cd "$root/$dir"

  serverless remove -v
}


for d in */; do
    remove "${d%/}"
done
