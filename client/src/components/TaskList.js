import axios from 'axios';

const TaskList = ({tasks, fetchTasks}) => {
    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        fetchTasks()
    }
    const toggleCheck = async (task) => {
        await axios.put(`http://localhost:5000/tasks/${task.id}`, { ...task, checked: !task.checked});
        fetchTasks();
    }
    return (
        <div>
            <h2>Tarefas</h2>
            <ul>
                {tasks.map(task =>(
                    <li key={task.id}>
                    <input
                    type='checkbox'
                    checked={task.checked}
                    onChange={() => toggleCheck(task)} 
                    />
                    {task.title} - {task.date} {task.time} ({task.duration} min)
                    <button onClick={() => deleteTask(task.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;

