import React, { useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import { ConfirmationMessage, Img, Line, CalendarContainer, Button, Input, SubTitle, HomeContainer, HomeSubContainer } from './styles';
import { FaCheckCircle } from 'react-icons/fa';
import Logo from '../../assets/logo.gif';

const Home = () => {
    const [taskName, setTaskName] = useState('');
    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [inputDate, setInputDate] = useState(date.toISOString().split('T')[0]);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const navigate = useNavigate();

    const addTask = async () => {
        await axios.post('http://localhost:3001/api/tasks', {
            name: taskName,
            date: inputDate,
            start_time: startTime,
            end_time: endTime
        });

        setTaskName('');
        setStartTime('');
        setEndTime('');
        setInputDate(new Date().toISOString().split('T')[0]);

        setConfirmationMessage('Tarefa adicionada com sucesso!');
        
        setTimeout(() => {
            setConfirmationMessage('');
        }, 3000);
    };

    const handleDateChange = (newDate) => {
        const formattedDate = newDate.toISOString().split('T')[0]; // Formato YYYY-MM-DD
        setDate(newDate);
        setInputDate(formattedDate);
        navigate(`/date/${formattedDate}`);
    };

    return (
        <>
            <a href='/'><Img alt='logo' src={Logo} /></a>
            <HomeContainer>
                <HomeSubContainer>
                    <SubTitle>Adicionar Tarefa</SubTitle>
                    <Line>
                        <Input 
                            type="text" 
                            placeholder="Nome da Tarefa" 
                            value={taskName} 
                            onChange={(e) => setTaskName(e.target.value)} 
                        />
                        <Input 
                            type="date" 
                            value={inputDate} 
                            onChange={(e) => {
                                const newDate = new Date(e.target.value);
                                setInputDate(e.target.value);
                                setDate(newDate);
                            }} 
                        />
                    </Line>
                    <Line>
                        <label>Horário Início:</label>
                        <Input 
                            type="time" 
                            value={startTime} 
                            onChange={(e) => setStartTime(e.target.value)} 
                        />
                        <label>Horário Término:</label>
                        <Input 
                            type="time" 
                            value={endTime} 
                            onChange={(e) => setEndTime(e.target.value)} 
                        />                
                    </Line>
                    <Button onClick={addTask}>Adicionar Tarefa</Button>
                    {confirmationMessage && <ConfirmationMessage><FaCheckCircle /> {confirmationMessage}</ConfirmationMessage>}
                </HomeSubContainer>
                <HomeSubContainer>
                    <CalendarContainer>
                        <Calendar 
                            onChange={handleDateChange} 
                            value={date} 
                        />
                    </CalendarContainer>
                </HomeSubContainer>
            </HomeContainer>
        </>
    );
};

export default Home;
