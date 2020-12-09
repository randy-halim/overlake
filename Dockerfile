FROM node:slim

COPY "build/" "/home/node/app"
COPY "package.json" "/home/node/app"

RUN "yarn install --production"

ENTRYPOINT [ "node", "." ]