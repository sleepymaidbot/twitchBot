import { SlashCommandBuilder } from '@discordjs/builders'

module.exports = {
	guildIds: ['821717486217986098'],
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong!')
		.toJSON(),

	async exec(interaction) {
		interaction.reply('Pong!')
	}
}
