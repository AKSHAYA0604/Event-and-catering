const { createPool } = require('mysql');

// Create a connection pool
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Akshaya@06",
    database: "mydb", // Make sure this is the database you want to use
    connectionLimit: 10
});

// Perform a query
pool.query('SELECT * FROM catering_options', function(err, results, fields) {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }
    console.log('Query results:', results);
});
