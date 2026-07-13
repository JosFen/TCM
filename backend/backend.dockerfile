
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
EXPOSE 4000

COPY docker-entrypoint.sh /usr/local/bin/tcm-entrypoint.sh
RUN chmod +x /usr/local/bin/tcm-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/tcm-entrypoint.sh"]
CMD ["npm", "run", "dev"]
