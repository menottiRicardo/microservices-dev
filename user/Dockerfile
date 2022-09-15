# Base image
FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN yarn

# Bundle app source
COPY . .

EXPOSE 9001
# Creates a "dist" folder with the production build
# RUN yarn build



# Start the server using the production build
CMD [ "yarn", "start:dev" ]