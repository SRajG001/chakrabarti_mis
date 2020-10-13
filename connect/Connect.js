const server = require('../AppConfig');
const Sequelize = require('sequelize');
const mysql = require('mysql2');

var Op = Sequelize.Op;

const sequelize = new Sequelize(server.DB, server.USER, server.PASSWORD, {
    host: server.HOST,
    dialect: "mysql",
    omitNull: false,
    pool: {
        max: 5,
        min: 0,
      acquire: 30000,
      idle: 10000
    }
});

// Create a connection to the database
// const connection = mysql.createConnection({
//   host: server.HOST,
//   user: server.USER,
//   password: server.PASSWORD,
//   database: server.DB
// });


// // open the MySQL connection
// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.PROGRAMME = require("../model/programme.js")(sequelize, Sequelize);
db.LLBGROUP = require("../model/llbgroup.js")(sequelize, Sequelize);
db.LLMGROUP = require("../model/llmgroup.js")(sequelize, Sequelize);
db.USER = require("../model/user.js")(sequelize, Sequelize);
db.LLBSTUDENT = require("../model/llbstudent.js")(sequelize, Sequelize);
db.LLMSTUDENT = require("../model/llmstudent.js")(sequelize, Sequelize);
db.FIRSTYEAR_HUMANRIGHTS = require("../model/firstyear_humanrights.js")(sequelize, Sequelize);
db.FIRSTYEAR_BUSINESS = require("../model/firstyear_business.js")(sequelize, Sequelize);
db.FIRSTYEAR_CRIMINALLAW = require("../model/firstyear_criminallaw.js")(sequelize, Sequelize);
db.SECONDYEAR_HUMANRIGHTS = require("../model/secondyear_humanrights.js")(sequelize, Sequelize);
db.SECONDYEAR_BUSINESS = require("../model/secondyear_business.js")(sequelize, Sequelize);
db.SECONDYEAR_CRIMINALLAW = require("../model/secondyear_criminallaw.js")(sequelize, Sequelize);
db.FIRSTYEAR = require("../model/firstyear.js")(sequelize, Sequelize);
db.SECONDYEAR = require("../model/secondyear.js")(sequelize, Sequelize);
db.THIRDYEAR = require("../model/thirdyear.js")(sequelize, Sequelize);
db.FOURTHYEAR = require("../model/fourthyear.js")(sequelize, Sequelize);
db.FOURTHYEAR_CRIMINAL = require("../model/fourthyear_criminal.js")(sequelize, Sequelize);
db.FOURTHYEAR_BUSINESS = require("../model/fourthyear_business.js")(sequelize, Sequelize);
db.FOURTHYEAR_CONSTITUTIONAL = require("../model/fourthyear_constitution.js")(sequelize, Sequelize);
db.FOURTHYEAR_ENVIRONMENT = require("../model/fourthyear_environment.js")(sequelize, Sequelize);
db.FIFTHYEAR = require("../model/fifthyear.js")(sequelize, Sequelize);
db.FIFTHYEAR_CRIMINAL = require("../model/fifthyear_criminal.js")(sequelize, Sequelize);
db.FIFTHYEAR_BUSINESS = require("../model/fifthyear_business.js")(sequelize, Sequelize);
db.FIFTHYEAR_CONSTITUTIONAL = require("../model/fifthyear_constitutional.js")(sequelize, Sequelize);
db.FIFTHYEAR_ENVIRONMENT = require("../model/fifthyear_environment.js")(sequelize, Sequelize);

module.exports = db;
// module.exports = connection;