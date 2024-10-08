const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'thayanne',
    database: 'calendar_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao MySQL')
});

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});