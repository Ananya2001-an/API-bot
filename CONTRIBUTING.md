## 🤖 How to contribute to API-bot
Thanks for deciding to contribute to the API-bot project. 💙 You have to follow the below steps for proper contribution flow.

- Kindly ask for assigning to an issue before raising a PR.
- If your issue is not present in the current issues list then you can create one.
- Only if the issue gets approved you should start working on it.
- Now follow the below **Development** section to start developing on your local machine.
- Later raise a PR to this repository's main branch for code review.
- Once code gets approved, it will be merged to the main branch!

## 💖 Want to add an API?
If you have an API suggestion for this bot you have to remember to make changes to the following files as well:
- add docs link for the API in [API-docs](API-docs.md)
- add slash command in [commands](src/commands/commands-list.js)
- add API's name and slash command in [README](README.md)

## 💻 Development:

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
