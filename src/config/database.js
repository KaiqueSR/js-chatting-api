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
		username: process.env.PROD_DB_USERNAME,
		password: process.env.PROD_DB_PASSWORD,
		database: process.env.PROD_DB_NAME,
		host: process.env.PROD_DB_HOST,
		port: process.env.PROD_DB_PORT,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
		dialect: "postgres",
	},
};
