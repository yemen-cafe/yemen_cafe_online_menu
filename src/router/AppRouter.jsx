import React, { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

const AppRouter = () => {
    const frühstückRef = useRef(null);

    const handelScroll = () => {
        frühstückRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Dashboard handleScroll={handelScroll} />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
