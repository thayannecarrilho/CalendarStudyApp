
import { createGlobalStyle }  from 'styled-components';
import  Background  from './assets/fundo.jpg'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
};
body {    
    text-align: center;
    padding: 1rem 3rem;
    font-family: Trebuchet MS;
    margin: 2rem;
    background-image: url(${Background});
    background-size: cover;
};
`