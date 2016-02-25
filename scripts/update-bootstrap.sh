#!/bin/bash

current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ ${current_branch} != master ]; then
  >&2 echo "Please update from the master branch."
  >&2 echo "Nothing was updated."
  exit 1
fi

git checkout vendor/bootstrap
git pull
git subtree split --squash --prefix=assets/stylesheets/ -b tmp_bootstrap
git checkout master
git subtree merge --squash --prefix=vendor/bootstrap/stylesheets tmp_bootstrap
git branch -D tmp_bootstrap
