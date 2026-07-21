# Project 
Ekaterina Ferrante - professional photographer

## Deployment (Optimized)
1. Install pnpm (if not already): `npm install -g pnpm`
2. Generate lockfile: `pnpm install`
3. Build and save: `./save-image.sh`
4. Load (on server): `docker load -i katya-nextjs-app.tar`

## Legacy Deployment
docker compose build --no-cache
docker save -o katya-nextjs-app.tar katya-nextjs-app
docker load -i katya-nextjs-app.tar
docker compose up -d

## Getting Started
 
```bash
npm run dev
```
 