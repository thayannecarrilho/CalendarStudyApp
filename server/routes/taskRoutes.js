const express = require('express');
const mysql = require('mysql2');
const router = express.Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // substitua pelo seu usuário
    password: 'thayanne', // substitua pela sua senha
    database: 'calendarstudy'
});

// Adicionar Tarefa
router.post('/', (req, res) => {
    const { name, date, start_time, end_time } = req.body;
    const sql = 'INSERT INTO tasks (name, date, start_time, end_time) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, date, start_time, end_time], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send(result);
    });
});

// Obter Tarefas por Data
router.get('/:date', (req, res) => {
    const sql = 'SELECT * FROM tasks WHERE date = ?';
    db.query(sql, [req.params.date], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
});

// Marcar Tarefa como Concluída
router.patch('/:id', (req, res) => {
    const sql = 'UPDATE tasks SET completed = ? WHERE id = ?';
    db.query(sql, [req.body.completed, req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(result);
    });
});

// Excluir Tarefa
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(204).send();
    });
});

module.exports = router;
