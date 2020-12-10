FROM node:alpine

WORKDIR "/home/node/app"

LABEL org.opencontainers.image.source https://github.com/randy-halim/overlake

ENV DISCORD_TOKEN "REPLACE_IN_PRODUCTION"
ENV SERVER_ID "REPLACE_IN_PRODUCTION"

COPY "build" "/home/node/app"
COPY "package.json" "/home/node/app"

RUN ["yarn", "install", "--production", "--no-lockfile"]
RUN ["rm", "package.json"]

ENTRYPOINT [ "node", "index.js" ]