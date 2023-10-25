const mysql = require("mysql2/promise");
const connect = async () => {
  try {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "retail",
      password: "root",
    });
    return connection;
  } catch (error) {
    console.error("ERROR HERE", error);
    throw error;
  }
};

module.exports = { connect };
