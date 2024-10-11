const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'currency_converter.db'), (err) => {
    if (err) {
        console.error('Error connecting to the database', err.message);
    } else {
        console.log('Connected to the SQLite database');
    }
});

const createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS exchange_rates (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            base_currency TEXT NOT NULL,
            target_currency TEXT NOT NULL,
            exchange_rate REAL NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `;

    db.run(sql, (err) => {
        if (err) {
            console.error('Error creating table', err.message);
        } else {
            console.log('Exchange rates table created or already exists');
        }
    });
};

createTable();

module.exports = db;
