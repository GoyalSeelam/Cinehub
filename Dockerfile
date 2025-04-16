# Use official Node image
FROM node:23-alpine3.20

# Set working directory
WORKDIR /app

# Install dependencies first for caching
COPY package.json package-lock.json ./
RUN npm install
RUN npm rebuild bcrypt --build-from-source

# Copy the rest of the application
COPY . .

# Install Python and build tools for any native dependencies



# Generate Prisma Client
RUN npx prisma generate

# Expose ports (default ports for Next.js and your custom port)
EXPOSE 3000 5555

# Build the Next.js app (uncomment if you need a production build)
RUN npm run build

# Start the Next.js app
CMD ["npm", "run", "dev"]
