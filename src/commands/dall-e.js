const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dall-e")
    .setDescription("Test the DALL-E API by OpenAI")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("image-generation")
        .setDescription("Generate image using text prompt!")
        .addStringOption((option) =>
          option
            .setName("api_key")
            .setDescription("Your DALL-E API key")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("image_prompt")
            .setDescription("Give prompt for image generation")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("text-completion")
        .setDescription("Text completion based on prompt!")
        .addStringOption((option) =>
          option
            .setName("api_key")
            .setDescription("Your DALL-E API key")
            .setRequired(true)
        )
        .addStringOption((option) =>
          option
            .setName("text_prompt")
            .setDescription("Give prompt for text completion")
            .setRequired(true)
        )
    ),
  async execute(interaction) {
    const key = interaction.options.getString("api_key");
    const configuration = new Configuration({
      apiKey: key,
    });
    const openai = new OpenAIApi(configuration);

    if (interaction.options.getSubcommand() === "image-generation") {
      await interaction.deferReply();
      const img_prompt = interaction.options.getString("image_prompt");
      const response = await openai.createImage({
        prompt: img_prompt,
        n: 1,
        size: "1024x1024",
      });
      const image = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`DALL-E image generation for prompt: "${img_prompt}"`)
        .setImage(response.data.data[0].url);
      await interaction.editReply({ embeds: [image] });
    } 
    
    else {
      await interaction.deferReply();
      const text_prompt = interaction.options.getString("text_prompt");
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text_prompt,
        max_tokens: 7,
        temperature: 0,
      });
      const text = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(`DALL-E text completion for prompt: "${text_prompt}"`)
        .setDescription(response.data.choices[0].text);
      await interaction.editReply({ embeds: [text] });
    }
  },
};
