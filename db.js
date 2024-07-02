const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'joke_app'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
    }
    else {
        console.log('Connected to database.');
    }
});

module.exports = db;