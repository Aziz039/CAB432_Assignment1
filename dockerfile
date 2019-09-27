FROM node:8

# Copy app
COPY . /src

# Set working directory
WORKDIR /src

# Install app dependencies
RUN npm install --only=production

# Expose port 
EXPOSE 8080

# start command 
CMD ["npm", "run", "dev"]