import { useEffect, useState } from "react";
import axios from 'axios';
import TaskList from '../components/TaskList';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({title: '', date: '', time: '', duration: 0});

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await axios.get('http://localhost:5000/tasks');
        setTasks(res.data);
    };

    const addTask = async () => {
        await axios.post('http://localhost:5000/tasks', newTask);
        fetchTasks();
        setNewTask({title: '', date: '', time: '', duration: 0});
    };

    return (
        <div>
            <h1>Programação de Estdos</h1>
            <input 
            type="text"
            placeholder="Título"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value})}
            />
            <input
            type="date"
            value={newTask.date}
            onChange={(e) => setNewTask({ ...newTask, date: e.target.value})}
             />
            <input
            type="time"
            value={newTask.time}
            onChange={(e) => setNewTask({ ...newTask, time: e.target.value})}
             />
             <input
            type="number"
            placeholder="Duração (min)"
            value={newTask.duration}
            onChange={(e) => setNewTask({ ...newTask, duration: e.target.value})}
             />
             <button onClick={addTask}>Adicionar Tarefa</button>
             <TaskList tasks={tasks} fetchTasks={fetchTasks} />
        </div>
    )
}

export default Home;