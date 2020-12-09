FROM node:alpine

WORKDIR "/home/node/app"

COPY "build" "/home/node/app"
COPY "package.json" "/home/node/app"

RUN ["yarn", "install", "--production"]

RUN ["rm", "package.json"]

ENV DISCORD_TOKEN "REPLACE_ME"

ENTRYPOINT [ "node", "index.js" ]