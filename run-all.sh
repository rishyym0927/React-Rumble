#!/bin/bash

# List of React app directories
APPS=("component01" "component02" "component03" "component04" "component05")

# Install dependencies for each app
for APP in "${APPS[@]}"; do
    echo "Installing dependencies in $APP..."
    (cd "$APP" && npm install)
done

# Construct command to start all apps
CMD=""
for APP in "${APPS[@]}"; do
    CMD+="(cd $APP && npm run dev) & "
done

# Run all commands concurrently
eval $CMD wait
