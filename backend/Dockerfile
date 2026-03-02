# --- Stage 1: Build ---
FROM node:24-slim AS builder
WORKDIR /app

# If your Dockerfile is INSIDE the /backend folder, use ./ 
# If it's in the root of the project, use ./backend/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Stage 2: Production ---
FROM node:24-slim
WORKDIR /app

# Choreo Security: Non-root user
RUN addgroup --system --gid 10001 nodejs && \
    adduser --system --uid 10001 --ingroup nodejs nestjs

# Copy files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

RUN chown -R nestjs:nodejs /app
USER 10001

# Choreo uses 8080 by default; this will override your '3001' default
ENV PORT=8080
EXPOSE 8080

# Points to your specific dist/src/main path
CMD ["node", "dist/src/main"]
