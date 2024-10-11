import styled from 'styled-components';

export const Img = styled.img`
    height: 8rem;
`
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 2rem;
`;

export const HomeSubContainer = styled.div`
    width: auto;
    height: 100%;
    margin: 2rem;
    background-color: rgba(249, 249, 249, 0.8);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;

    label{
        margin: 20px 0;
        font-weight: 700;
        font-size: 16px;
    }
`
export const Line = styled.div`
    display: flex;
    gap: 10px;
`

export const SubTitle = styled.h2`
    color: #333;
    margin-bottom: 1rem;
`;

export const Input = styled.input`
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: auto;
    font-size: 16px;

    &[type='text'] {
    width: 45vh;
    };
        
`;

export const Button = styled.button`
    padding: 10px 20px;
    margin-top: 1rem;
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

export const CalendarContainer = styled.div`
    width: 100%;
    max-width: 100%;

    .react-calendar {
        width: 100%; 
        max-width: 100%; 
    }

    .react-calendar__navigation button {
        margin: 0 2px 16px 2px;
        padding: 10px;
        font-size: 14px;
        font-weight: 700;
        border-radius: 5px;
        border: none;
        background-color: #ff6f91; 
        text-transform: uppercase;
        color: #fff;
        cursor: pointer;    
    }
    .react-calendar__navigation__arrow:hover {
        background: #ff7f50;
    };

    .react-calendar__month-view__weekdays {
        margin-bottom: 0.5rem;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
    }
    
    .react-calendar__month-view__days {
        background: #fff;
        border-radius: 4px;
    }

    .react-calendar__tile {
        padding: 10px;
        text-align: center;
        font-weight: 700;
        border: none;
        transition: 1s;
        border-radius: 4px;
        cursor: pointer;
        margin: 0;
        box-sizing: border-box; 
        background: transparent;
    }   

    .react-calendar__tile--now {
        background-color: #ff6f91; 
        color: white;
    }

    .react-calendar__tile:hover {
        background-color: #ff7f50;
}
`;

export const ConfirmationMessage = styled.p`
    color: #28a745;
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
`;

