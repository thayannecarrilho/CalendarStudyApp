const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const tasksRoute = require('./routes/taskRoutes');
app.use('/api/tasks', tasksRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na port ${port}`);
});