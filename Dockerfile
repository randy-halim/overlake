FROM node:alpine

WORKDIR "/home/node/app"

COPY "build" "/home/node/app"
COPY "package.json" "/home/node/app"

RUN ["yarn", "install", "--production"]

RUN ["rm", "package.json"]

ENV DISCORD_TOKEN "REPLACE_IN_PRODUCTION"
ENV SERVER_ID "REPLACE_IN_PRODUCTION"

LABEL org.opencontainers.image.source https://github.com/randy-halim/overlake

ENTRYPOINT [ "node", "index.js" ]