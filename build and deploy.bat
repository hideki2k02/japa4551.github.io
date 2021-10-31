@ECHO OFF
title Git Deploy

call yarn run build
git add dist && git commit -m "Initial dist subtree commit"
git subtree push --prefix dist origin gh-pages
pause