#!/usr/bin/env bash

# Example usage:
# ./bin/pull-latest.sh -d ~/src

# Exiting on error so we abort if there are unstashed changes that prevent us
# from pulling the latest or switching branches.
# If the script doesn't finish, resolve the errors (usually by stashing or
# committing unsaved work) and try again.
set -e

# Chage the upstream if you want to clone repos from a different account
upstream="git@github.com:domtriola"

# Add or remove any repo:branch that you do or don't want.
# If you do not have a repo in the list, the script will try to clone it.
repo_branches=(
  "software-notes:master"
  "repo-a:dev"
  "repo-b:master"
)

echo "This will switch each of the listed repos to its corresponding branch:"
echo "--------------------------"
for repo_branch in "${repo_branches[@]}"; do echo $repo_branch; done
echo "--------------------------"
echo "Proceed? (yes/no)"
read proceed

[ "$proceed" == "yes" ] || { echo "Exiting..."; exit 1; }

while getopts "d:" opt; do
  case $opt in
    d) dir=$OPTARG      ;;
    *) echo "Flag not recognized" >&2
       exit 1
  esac
done

if [ ! -d "$dir" ]; then
  cat << EOM
Option -d is either not a directory or it is missing.
Please identify your workspace directory path with -d.
EOM
    exit 1
fi

separator="+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"

for repo_branch in "${repo_branches[@]}"; do
  echo $separator
  repo=${repo_branch%%:*}
  branch=${repo_branch#*:}

  if [ ! -d "$dir/$repo" ]; then
    cd $dir
    echo "+ Cloning $upstream/$repo.git"
    git clone "$upstream/$repo.git"
    echo $separator
    continue
  fi

  cd $dir/$repo
  echo "+ Updating $dir/$repo"
  git checkout $branch
  git pull origin $branch
  echo $separator
done

echo "All up to date!"
