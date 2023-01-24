const { Client } = require("pg");

export default function createDatabase() {
  const client = new Client({
    user: "postgres",
    password: "supersecretpassword",
    host: "localhost",
    database: "postgres",
  });

  client.connect();

  client.query('CREATE DATABASE "fsa"', (err, res) => {
    console.log(err, res);
    client.end();
  });
}