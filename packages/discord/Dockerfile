FROM node:alpine

WORKDIR "/home/node/app"

LABEL org.opencontainers.image.source https://github.com/randy-halim/overlake

VOLUME [ "/tmp/log/overlake/discord" ]

ENV NODE_ENV "PRODUCTION"
ENV DISCORD_TOKEN "REPLACE_IN_PRODUCTION"
ENV SERVER_ID "REPLACE_IN_PRODUCTION"

COPY "." "/home/node/app"
RUN ["yarn", "install", "--production", "--no-lockfile"]
RUN ["rm", "package.json"]

ENTRYPOINT [ "node", "index.js" ]