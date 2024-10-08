import axios from 'axios';
import { useEffect, useState } from 'react';

const StudyHours = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await axios.get('http://localhost:5000/tasks');
        setTasks(res.data);
    }

    const totalHours = () => {
        return tasks.reduce((acc, task) => task.checked ? acc + task.duration : acc, 0)
    }
    
    return (
        <div>
            <h1> Levantamento de Horas Estudadas</h1>
            <h2>Total de Minutos Estudados: {totalHours()} min</h2>
            <ul>
                {tasks.filter(task => task.checked).map(task => (
                    <li key={task.id}>
                        {task.title}: {task.duration} min
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudyHours;