var config = {
	host: "http://passion-bakery.com",
	port: 8081,
	env: 'production'
}

config.fullHost = config.host + ":" + config.port;

module.exports = config;