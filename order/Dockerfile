FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn prisma generate
# Creates a "dist" folder with the production build
RUN yarn build

CMD [ "yarn", "start:dev" ]