import { Intents } from 'discord.js'
import BotClient from './lib/extension/BotClient'

const client: BotClient = new BotClient(
	{
		intents: new Intents(['GUILDS', 'GUILD_MEMBERS']),
		allowedMentions: { parse: ['users', 'roles'], repliedUser: false }
	},
	{
		botName: 'Bot'
	}
)

client.startAll()
