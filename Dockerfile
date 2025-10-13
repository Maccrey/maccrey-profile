# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY maccrey-portfolio/package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY maccrey-portfolio/ ./

# Build the Next.js application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/data ./data

# Install production dependencies only
RUN npm ci --only=production

# Expose port
EXPOSE 3500

# Set environment variables for external access
ENV PORT=3500
ENV HOSTNAME=0.0.0.0

# Start the application
CMD ["npm", "start"]
