# FROM node:22
# WORKDIR /app
# COPY package*.json .
# RUN npm install
# COPY prisma ./prisma
# RUN npx prisma generate
# COPY . .
# EXPOSE 3000
# RUN npm install -g nodemon ts-node
# CMD ["nodemon", "src/index.ts"]

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
CMD ["nodemon", "src/index.ts"]
