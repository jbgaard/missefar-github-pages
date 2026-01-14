
# === Build stage ===
FROM oven/bun AS build

WORKDIR /app
COPY . .
RUN bun i
RUN bun run build

# === Deployment stage ===
FROM oven/bun AS deploy
WORKDIR /app

# Copy build files from build stage
COPY --from=build /app/build /app/build

# Copy package.json
COPY --from=build /app/package.json ./

# Install dependencies omit devDependencies
RUN bun i --prod

# Expose port
EXPOSE 3000

# Serve
ENTRYPOINT ["node", "build"]
