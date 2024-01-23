# Use a Node.js base image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install TypeScript globally and project dependencies
RUN npm install -g typescript
RUN npm install

# Copy the rest of the application
COPY . .

# Compile TypeScript to JavaScript
RUN tsc

# Command to run the application
CMD [ "node", "dist/app.js" ]
