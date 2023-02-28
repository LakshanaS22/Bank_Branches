const {Client} = require('pg');

const client = new Client({
    user:"postgres",
    password:"password",
 connectionString: "postgres://postgres:password@localhost:5432/postgres",
 //ssl: true
});

module.exports = client
