const { SlashCommandBuilder } = require("discord.js");
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tenor-gif")
    .setDescription("Fetches a Tenor gif!")
    .addStringOption((option) =>
      option
        .setName("access_key")
        .setDescription("Your Tenor Access Key")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription("Give search query for Tenor gif")
        .setRequired(true)
    ),
  async execute(interaction) {
    const key = interaction.options.getString('access_key');
    const query = interaction.options.getString("query");

    const res = await axios.get(
      `https://tenor.googleapis.com/v2/search?q=${query}&key=${key}`
    );
    const index = Math.floor(Math.random() * res.data.results.length);
    await interaction.reply(res.data.results[index].media_formats.gif.url);
  },
};
