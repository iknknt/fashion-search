require('dotenv').config();

const Database = require('better-sqlite3');


const db = new Database('data/list.sqlite');

for (const item of db.prepare('SELECT * FROM list').iterate()) {
  console.log(item);
}

