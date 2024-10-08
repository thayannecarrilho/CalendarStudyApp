const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', (req, res) => {
    Task.getAll((err, results) => {
        if(err) return res.status(500).json(err);
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const task = req.body;
    Task.create(task, (err, results) => {
        if(err) return res.status(500).json(err);
        res.json({id: results.inserId, ...task});
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Task.delete(id, (err) => {
        if(err) return res.status(500).json(err);
        res.json({ message: 'Task deletada'});
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedTask = req.body;
    Task.update(id, updatedTask, (err) => {
        if(err) return res.status(500),json(err);
        res.json({message: 'Task atualizada'});
    });
});

module.exports = router;