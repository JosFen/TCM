# FROM node:22-alpine

# WORKDIR /app

# # 1. Install dependencies (separate layer for caching)
# COPY package*.json ./
# RUN npm install

# # 2. Copy Prisma schema and generate client
# COPY prisma ./prisma/
# RUN npx prisma generate

# # 3. Copy all source files
# COPY . .

# # 4. Install ts-node and typescript globally (for better performance)
# RUN npm install -g nodemon ts-node

# # 5. Health check
# HEALTHCHECK --interval=30s --timeout=3s \
#   CMD node -e "require('@prisma/client').PrismaClient" || exit 1

# EXPOSE 3000

# # Use nodemon for development with ts-node
# CMD ["nodemon", "src/app.ts"]


FROM node:22
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

COPY ../files ./files 
# Copy the entire project (including prisma/, src/, etc.)
COPY . .

# Now generate the Prisma Client (after all code is present)
RUN npx prisma generate

# Optional: install dev tools globally
RUN npm install -g nodemon ts-node

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["nodemon", "src/app.ts"]
