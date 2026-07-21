#!/bin/bash

# This script syncs the Docker image tarball to the remote server.
# Based on the rsync command in the root README.md.

IMAGE_FILE="katya-nextjs-app.tar"
REMOTE_PATH="sashas@116.202.113.11:/home/sashas/katya/katya-nextjs-app.tar"

if [ ! -f "$IMAGE_FILE" ]; then
    echo "Error: $IMAGE_FILE not found! Please run ./save-image.sh first."
    exit 1
fi

echo "Syncing $IMAGE_FILE to $REMOTE_PATH..."
rsync -avz -e "ssh -i ~/.ssh/id_ed25519"  $IMAGE_FILE $REMOTE_PATH

if [ $? -eq 0 ]; then
    echo "Sync successful!"
else
    echo "Sync failed! Please check your connection and SSH permissions."
    exit 1
fi
