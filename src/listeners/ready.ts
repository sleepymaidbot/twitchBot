module.exports = {
	name: 'ready',
	once: false,

	execute(client) {
		client.logger.info(`${client.user.tag} is ready!`)
	}
}
