const mysql = require('mysql2');
const { FcCallback } = require('react-icons/fc');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'thayanne',
    database: 'calendar_db'
});

const Task = {
    getAll: (callback) => {
        db.query('SELECT * FROM tasks', callback);
    },
    create: (task, callback) => {
        db.query('INSERT INTO tasks SET ?', task, callback)
    },
    delete: (id, callback) => {
        db.quey('DELETE FROM tasks WHERE id = ?', [id], callback)
    },
    update: (id, task, callback) => {
        db.query('UPDATE tasks SET ? WHERE id = ?', [task, id], callback)
    }
}

module.exports = Task