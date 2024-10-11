import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import PageData from './components/PageData/PageData';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/date/:date" element={<PageData />} />
        </Routes>
    );
};

export default App;
