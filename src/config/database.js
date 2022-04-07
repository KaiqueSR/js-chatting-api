require("dotenv/config");

module.exports = {
	development: {
		username: process.env.DEV_DB_USERNAME,
		password: process.env.DEV_DB_PASSWORD,
		database: process.env.DEV_DB_NAME,
		host: "localhost",
		port: process.env.DEV_DB_PORT,
		dialect: "postgres",
	},
	production: {
		use_env_variable: process.env.DATABASE_URL,
		dialectOptions: {
			ssl: true,
		},
		dialect: "postgres",
	},
};

