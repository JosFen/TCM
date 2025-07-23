
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

# Expose the app port
EXPOSE 3000

# Run the app
# CMD ["nodemon", "src/app.ts"] 
CMD ["npm", "run", "dev"]
