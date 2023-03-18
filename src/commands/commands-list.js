const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

const commands = new EmbedBuilder()
  .setColor(0x0099ff)
  .setTitle("Commands in API-bot! 🕹")
  .setDescription(
    "- **`/api-bot`** -> explains API-bot \n\n \
    **TENOR** \n \
    - **`/tenor-gif`** -> fetches gifs (options: access-key, query) \n\n \
    **DALL-E by OpenAI**\n \
    - **`/dall-e image-generation`** -> generate images based on text prompt (options: api-key, prompt)\n \
    - **`/dall-e text-completion`** -> get text completion based on text prompt (options: api-key, prompt)"
  )
  .setThumbnail(
    "https://user-images.githubusercontent.com/55504616/225830453-7b428ef9-ad78-466a-9c09-2326dc9bba8e.png"
  );


module.exports = {
  data: new SlashCommandBuilder()
    .setName("commands")
    .setDescription("See all available commands"),
  async execute(interaction) {
    await interaction.reply({embeds: [commands]});
  },
};