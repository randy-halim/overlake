# Overlake Discord Bot

Discord bot running in a Docker container.

# Setup and Usage

1. Pull image from ghcr.io
2. Run image; make sure your environment variables are set (see **Environment**)
3. ~~Not implemented: Connect container to other containers to communicate data.~~

# Environment

There are several environment variables that you have to set in order for the bot to work properly:

- `DISCORD_TOKEN` - Grab this from the Discord developers portal
- `SERVER_ID` - Enable developer mode in your client, and copy server ID. This is to limit your bot to only the server specified.
- `COMMAND_PREFIX` - Self explanatory, sets the prefix for the bot to listen for.
