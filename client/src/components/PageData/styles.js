import styled from 'styled-components';

export const Img = styled.img`
    height: 8rem;
`
export const PageDataContainer = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    width: 600px;
    margin: 2rem auto;
`;

export const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 1rem;
    color: #333;
`;

export const TaskList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const TaskItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;
    padding: 10px;
    border-bottom: 1px solid #ccc;

    &:last-child {
        border-bottom: none;
    }
`;

export const TaskName = styled.span`
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
    color: ${(props) => (props.completed ? '#aaa' : '#333')};
    flex-grow: 1;
`;

export const TaskTimes = styled.span`
    margin: 0 10px;
    color: #666;
`;

export const Button = styled.button`
    padding: 10px 20px;
    margin: 0 10px;
    background-color: #ff6f91;
    font-size: 16px;
    font-weight: 700;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff7f50;
    }
`;