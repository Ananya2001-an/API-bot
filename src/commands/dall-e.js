const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dall-e")
    .setDescription("Generate image using text prompt!")
    .addStringOption((option) =>
      option
        .setName("api_key")
        .setDescription("Your DALL-E API key")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("prompt")
        .setDescription("Give prompt for image generation")
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.deferReply();
    const key = interaction.options.getString("api_key");
    const prompt = interaction.options.getString("prompt");

    const configuration = new Configuration({
      apiKey: key,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    const index = Math.floor(Math.random() * response.data.data.length);
    const image = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(`DALL-E Image generation for prompt: "${prompt}"`)
      .setImage(response.data.data[index].url);
    await interaction.editReply({ embeds: [image] });
  },
};
