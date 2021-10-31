@ECHO OFF
title Build and Deploy

call yarn run build
npm run deploy
pause