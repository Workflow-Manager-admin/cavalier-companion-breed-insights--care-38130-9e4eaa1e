#!/bin/bash
cd /home/kavia/workspace/code-generation/cavalier-companion-breed-insights--care-38130-9e4eaa1e/cavalier_companion_breed_insights_care
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

