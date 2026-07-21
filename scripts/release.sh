#!/bin/bash
set -e

# Project Root
SCRIPT_DIR=$(dirname $(readlink -f $0))
PROJECT_ROOT=$(dirname "$SCRIPT_DIR")
VERSION_FILE="$PROJECT_ROOT/.version"
REGISTRY="registry.superstar.sashas.cc/katya-nextjs-app"

# Ensure we are running from project root context
cd "$PROJECT_ROOT"

if [ ! -f "$VERSION_FILE" ]; then
    echo "Error: .version file not found at $VERSION_FILE"
    exit 1
fi

VERSION=$(cat "$VERSION_FILE")
echo "🚀 Releasing Version: $VERSION"

# Build
echo "📦 Building Image..."
docker build -t "$REGISTRY:$VERSION" ./whalelovephoto

# Tag latest
echo "🏷️ Tagging as latest..."
docker tag "$REGISTRY:$VERSION" "$REGISTRY:latest"

# Push
echo "📤 Pushing to Registry..."
docker push "$REGISTRY:$VERSION"
docker push "$REGISTRY:latest"

echo "✅ Release $VERSION successful!"
