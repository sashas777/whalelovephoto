# !/bin/bash

# Configuration
IMAGE_NAME="katya-nextjs-app"
TAR_FILE="katya-nextjs-app.tar"
REMOTE_DEST="sashas@116.202.113.11:/home/sashas/katya/katya-nextjs-app.tar"

echo "Building optimized image..."
docker compose build --no-cache

echo "Saving image to $TAR_FILE..."
docker save -o $TAR_FILE $IMAGE_NAME

echo "Image saved to $TAR_FILE"

# Optional: Add rsync if the user wants it to be automated
# echo "Syncing to remote server..."
# rsync -avz $TAR_FILE $REMOTE_DEST
