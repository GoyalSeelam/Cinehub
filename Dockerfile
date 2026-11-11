# Production image. Local development still uses `docker compose up`,
# which overrides the command with `npm run dev`.

FROM node:20-alpine3.20 AS build
WORKDIR /app
RUN apk add --no-cache openssl
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx prisma generate \
 && npm run build \
 && npm prune --omit=dev

FROM node:20-alpine3.20
WORKDIR /app
RUN apk add --no-cache openssl
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000
COPY --from=build --chown=node:node /app/package.json ./package.json
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/.next ./.next
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/prisma ./prisma
COPY --from=build --chown=node:node /app/next.config.js ./next.config.js
USER node
EXPOSE 3000
CMD ["npx", "next", "start", "-p", "3000"]
