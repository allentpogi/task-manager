const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: "localhost",
//       dialect: "mysql",
//       port: 3306,
//     }
//   );
// }

//test

// sequelize = new Sequelize("railway", "root", "oWROjsDkMksFQDBtWdx9", {
//   host: "containers-us-west-37.railway.app",
//   dialect: "mysql",
//   port: 7198,
// });

if (process.env.MYSQL_URL) {
  sequelize = new Sequelize(process.env.MYSQL_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
