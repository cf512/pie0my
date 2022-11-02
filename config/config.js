module.exports = {
    "development": {
        "database": process.env.MYSQL_DB,
        "domain": process.env.DOMAIN_DEV,
        "host": "localhost",
        "dialect": "mysql"
    },
    production: {
        "use_env_variable": "JAWSDB_URL",
        "domain": process.env.DOMAIN_PROD,
        "dialect": "mysql"
    }
};