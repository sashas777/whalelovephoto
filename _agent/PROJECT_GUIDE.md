# Katya Project - Agent Guide

This guide provides technical context and development conventions for the Katya project.

## 🏗️ Architecture Overview

The project consists of:
- **`whalelovephoto/`**: A Next.js web application.
- **`nginx/`**: Reverse proxy configuration.
- **`docker-compose.yml`**: Orchestration for the services.

## 🛠️ WSL Development & Tooling

### Path Validation Bug
There is a known path-validation bug in the default `run_command` tool when working within WSL (Ubuntu-20.04). It may report that valid workspace paths (like `/home/sashas/katya/whalelovephoto`) are inaccessible.

### Workaround: `run_command` Usage
If `run_command` fails with "path is not in a workspace which you have access to", use the following workaround:
1. Set `Cwd` to your artifact directory (e.g., `/home/sashas/.gemini/antigravity/brain/1f13bb22-79a1-420d-8252-9ff0df26eeb5`).
2. Prefix your command with `cd /home/sashas/katya && ...`.

**Example**:
```python
run_command(
    CommandLine="cd /home/sashas/katya/whalelovephoto && pnpm install",
    Cwd="/home/sashas/.gemini/antigravity/brain/1f13bb22-79a1-420d-8252-9ff0df26eeb5",
    SafeToAutoRun=true
)
```

## 🚀 Development Workflow

### Web App (`whalelovephoto`)
- **Package Manager**: `pnpm`
- **Framework**: Next.js
- **Build**: `pnpm build` (generates standalone output)
- **Docker**: Build using the optimized multi-stage `Dockerfile`.

### Docker Commands
- **Build**: `docker build -t registry.superstar.sashas.cc/katya-nextjs-app ./whalelovephoto`
- **Compose Up**: `docker compose up -d`

## 🚀 Deployment & Release

To deploy changes, you MUST use the registry-based workflow:

1. **Update Version**: If significant changes are made, increment the version in `.version`.
2. **Release**: Run the release script to build and push to the registry.
   ```bash
   cd /home/sashas/katya && ./scripts/release.sh
   ```
3. **Production Update**: On the server, use the pull/up flow:
   ```bash
   docker compose pull && docker compose up -d
   ```
4. **Cleanup**: Periodically clean up unused images:
   ```bash
   docker image prune -af
   ```
