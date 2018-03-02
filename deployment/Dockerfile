FROM node:carbon

ARG NPM_TOKEN

WORKDIR /opt/package

# Move the package into the container
COPY . /opt/package

# Configure yarn to use NPM registry
RUN yarn config set registry "https://registry.npmjs.org"

# Set authToken for access to @propelleraero/* packages.
RUN npm config set "//registry.npmjs.org/:_authToken" ${NPM_TOKEN}

# Dependencies
RUN yarn install