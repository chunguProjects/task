
//initialize the sequelize module

const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const { dialect } = require("../config/db.config.js");
require("dotenv").config()

const connectionString = 'postgres://root:root@localhost:5432/task_app'
const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect:"postgres",
	dialectOptions:{
		ssl:{
			require:true,
			rejectUnauthorized:false
		}
	}
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tasks = require("./task.model.js")(sequelize, Sequelize);

module.exports = db;