# Optimized Workflow
1. Install pnpm (if needed): `npm install -g pnpm`
2. Prepare dependencies: `cd whalelovephoto && pnpm install && cd ..`
3. Build & Save: `./save-image.sh`
4. Sync to Server: `./sync-image.sh`
5. Remote Load (Manual Step): `docker load -i katya-nextjs-app.tar`

# Legacy Deployment
1. docker compose build --no-cache
2. docker save -o katya-nextjs-app.tar katya-nextjs-app
3. rsync -avz katya-nextjs-app.tar sashas@195.201.90.186:/var/www/whalelovephoto/katya-nextjs-app.tar
4. docker load -i katya-nextjs-app.tar
