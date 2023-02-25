import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/admin" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
