FROM node:20-alpine AS base

# Step 1: Install pnpm
RUN npm install -g pnpm

# Step 2: Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
# Note: If pnpm-lock.yaml is not yet created, pnpm install will create it.
RUN pnpm install

# Step 3: Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm run build

# Step 4: Production runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Setup production user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Standard Next.js standalone setup
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Next.js standalone mode uses server.js
CMD ["node", "server.js"]
