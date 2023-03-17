const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

const help = new EmbedBuilder()
  .setColor(0x0099ff)
  .setTitle("Welcome to API-bot!✨")
  .setURL("https://github.com/Ananya2001-an/API-bot")
  .setDescription("The API-bot allows you to test different APIs in your discord server itself! You can write `/` command to see all available APIs. For each API query you must have the required credentials like API-key. Some might also need some special inputs so make sure that you are familiar with the docs of that particular API. This bot is completely open source and we would love your contributions whether it's a new API integration idea or fixing bugs to improve the bot's performance; any kind of help is highly appreciated ;) \n\n **The current available commands are:** \n`/help` - how to use API-bot \n`/tenor-gif` - query tenor API to fetch gifs (options: access-key, query) \n `/dall-e` - query DALL-E API to generate images by giving text as prompt (options: api-key, prompt)")
  .setThumbnail(
    "https://user-images.githubusercontent.com/55504616/225830453-7b428ef9-ad78-466a-9c09-2326dc9bba8e.png"
  )
  .setFooter({
    text: "Enjoy working with the bot! 💖😀",
});


module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Understand how to use API-bot"),
  async execute(interaction) {
    await interaction.reply({embeds: [help]});
  },
};