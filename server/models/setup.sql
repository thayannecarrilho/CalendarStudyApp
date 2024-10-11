CREATE DATABASE IF NOT EXISTS calendarstudy;

USE calendarstudy;

CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);

INSERT INTO tasks (name, date, start_time, end_time, completed) VALUES
('Tarefa 1', '2024-10-15', '09:00:00', '10:00:00', FALSE),
('Tarefa 2', '2024-10-15', '11:00:00', '12:00:00', TRUE),
('Tarefa 3', '2024-10-16', '14:00:00', '15:00:00', FALSE);
