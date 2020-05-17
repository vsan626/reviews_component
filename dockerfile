#Tells docker to use another image as base layer of our Dockerfile
FROM node:13-alpine

# RUN npm i -g nodemon

# Set image metadata
LABEL description = "Lululemon reviews"

# RUN mkdir /client/dist
# Tells docker the folder it should be peforming commands in
WORKDIR /client/dist
# install dependencies
# COPY . /client/dist
# Tells docker to copy only package.json &lock.json into image

# COPY package*.json ./

COPY . /client/dist

# npm install step
# RUN npm cache clean --force && npm ci
RUN npm install
# copies the rest of the app into the filesystem. Put this as one of the last layers for caching purposes

# COPY . .

# could not run seed because database connection not yet available
# RUN npm run seed

# Expose docker PORT on the container when it is running
EXPOSE 3001
# runs npm start on instantiation of container, runs our app inside of it
# CMD [ "npm", "start"]
CMD [ "npm", "run", "start-main"]
