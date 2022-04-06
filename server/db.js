const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'Rauf10',
  host: 'localhost',
  database: 'todo',
  port: 5432
});

module.exports = pool;