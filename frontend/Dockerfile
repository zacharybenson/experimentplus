# Use an official node runtime as a parent image
FROM node:14.17.5-alpine

WORKDIR /app/

# Install dependencies
COPY package.json /app/

# install dependencies and avoid `node-gyp rebuild` errors
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm ci \
    && npm install --legacy-peer-deps \
    && apk del .gyp


# Add rest of the client code
COPY . /app/

EXPOSE 3000

CMD npm start
