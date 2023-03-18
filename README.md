<div align="center">
<img src="https://user-images.githubusercontent.com/55504616/225830453-7b428ef9-ad78-466a-9c09-2326dc9bba8e.png" height=200>
<h1>API bot 🤖</h1>

[![Releases](https://github.com/Ananya2001-an/API-bot/actions/workflows/release.yml/badge.svg)](https://github.com/Ananya2001-an/API-bot/actions/workflows/release.yml)

<p>The API-bot is a discord bot that allows you to test different APIs in your discord server itself! You can write '/' command to see all available APIs. For each API query you must have the required credentials like API-key and required inputs.</p>
</div>

<br>

### 👨‍💻 APIs currently integrated

> You can refer the [API-docs](API-docs.md) file for getting the credentials for each API that is available for testing in the bot. **You must follow the same docs that is given in the file for getting the keys or else the bot might not work.** 

- [DALL-E](https://platform.openai.com/docs/guides/images/introduction)
- [Tenor](https://developers.google.com/tenor/guides/quickstart)

<p align="center">
 <img src="https://user-images.githubusercontent.com/55504616/225971169-a267b0a4-28ad-427d-ba8c-be75488848ad.gif">
</p>

### ✍️ Commands:

Every command will start with a slash (`/`) and is integrated into Discord Slash commands.
  
- `/help` - to see all available commands and understand the bot's usage.
  
- `/tenor-gif` - query the Tenor API to get gifs.
  
- `/dall-e` - query the DALL-E API to generate images based on text prompt.

### 🕹️ Using the Bot:

**Step 1:** First you need to invite the bot to the server. Click icon 👉 <a href="https://discord.com/api/oauth2/authorize?client_id=1085946999888691201&permissions=0&scope=bot%20applications.commands"><img align="right" height=100 src="https://user-images.githubusercontent.com/55504616/225830453-7b428ef9-ad78-466a-9c09-2326dc9bba8e.png"><a>
 
**Step 2:** Now you can choose different APIs using corresponding slash command.

**Step 3:** Read the official docs for the chosen API to get the needed credentials. Without it you won't be able to make any queries.

## 💻 Development:

> **Remember to read the [Contributing](CONTRIBUTING.md) guide before you start developing.** 
 
- Fork this repository. Later clone it for developing.
 
- Install all the dependencies from [`package.json`](/package.json) file by running the below command in your terminal.
```sh
npm install 
```

- Create a `.env` file in the root folder and add your Discord bot token and client id (Application ID) by creating a bot application in the [Discord Developer Portal](https://discord.com/developers/applications)

<details>
<summary>Like this</summary>
  <img src="https://user-images.githubusercontent.com/55504616/225972207-ed5d4cf1-ed1f-4d7b-a7f5-ddb21018e4e3.png">
</details>
   
```txt
BOT_TOKEN=xxxxxxx
BOT_CLIENT_ID=xxxxxxx
```
   
- Invite the bot to your testing server by generating a URL with appropriate scopes and permissions. You have to choose `scopes: bot, applications.commands` and `no bot permissions`. 

- Run `npm run dev` in the terminal for running the bot. Bot will automatically refresh on changes made since this script executes `src/bot.js` file using `nodemon`. 
  
## 🎯 Aim of the project:

This project is useful to test various APIs with ease and is a good way to get familiar with them. 
