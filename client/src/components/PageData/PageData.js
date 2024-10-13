import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { PageDataContainer, Img, Title, TaskItem, TaskName, TaskTimes, TaskList, Button } from './styles';
import Logo from '../../assets/logo.gif';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${('0' + date.getUTCDate()).slice(-2)}/${('0' + (date.getUTCMonth() + 1)).slice(-2)}/${date.getUTCFullYear()}`;
};



const formatTime = (timeString) => {
    const date = new Date(`1970-01-01T${timeString}`);
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
};

const PageData = () => {
    const { date } = useParams();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/tasks/${date}`);
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        if (date) {
            fetchTasks();
        }
    }, [date]);

    const toggleComplete = async (task) => {
        await axios.patch(`http://localhost:3001/api/tasks/${task.id}`, { completed: !task.completed });
        setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:3001/api/tasks/${id}`);
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <>
            <a href='/'><Img alt='logo' src={Logo} /></a>
            <PageDataContainer>
                <Title>Tarefas para {formatDate(date)}</Title>
                <TaskList>
                    {tasks.map(task => (
                        <TaskItem key={task.id}>
                            <TaskName completed={task.completed}>{task.name}</TaskName>
                            <TaskTimes>
                                {formatTime(task.start_time)} - {formatTime(task.end_time)}
                            </TaskTimes>
                            <div>
                                <Button onClick={() => toggleComplete(task)}>
                                    {task.completed ? 'Desmarcar' : 'Concluir'}
                                </Button>
                                <Button onClick={() => deleteTask(task.id)}>Excluir</Button>
                            </div>
                        </TaskItem>
                    ))}
                </TaskList>
            </PageDataContainer>
        </>
    );
};

export default PageData;
