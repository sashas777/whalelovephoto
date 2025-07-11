
docker compose build --no-cache
docker save -o katya-nextjs-app.tar katya-nextjs-app
docker load -i katya-nextjs-app.tar
docker compose up -d
## Getting Started
 
```bash
npm run dev
```
 