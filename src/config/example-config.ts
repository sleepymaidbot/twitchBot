import { Config } from '../lib/util/config'

export const config = new Config({
	credentials: {
		token: 'yo',
		devToken: 'yo'
	},
	environment: 'development',
	owners: ['324281236728053760'],
	prefix: '-',
	devprefix: 'dev.'
})
