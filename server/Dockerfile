FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source code
COPY . .

EXPOSE 4000
ENV NODE_ENV=production

CMD ["node", "index.js"]

#  docker exec -it 4e6e95ed6d4a /bin/sh  to get into app