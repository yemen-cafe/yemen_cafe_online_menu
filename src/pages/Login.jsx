import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoo.png';
import { login } from '../helpers/firebase';

const Login = () => {
    const [inputVal, setinputVal] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(inputVal?.email, inputVal?.password, navigate);
    };
    const handleChange = (e) => {
        setinputVal({
            ...inputVal,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                backgroundColor: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '300px',
                    maxWidth: '100%',
                    border: '1px solid red',
                    backgroundColor: 'darkred',
                    minHeight: '50vh',
                    borderRadius: '2rem',
                    rowGap: '10px',
                }}>
                <Avatar
                    src={logo}
                    sx={{
                        width: '60px',
                        height: '60px',
                        outline: '2px solid black',
                        // border: '2px solid black',
                        outlineOffset: '2px',
                        transform: 'rotate(2deg)',
                    }}
                />
                <Typography variant="h4" fontFamily={'customFont'}>
                    ADMIN LOGIN
                </Typography>
                <TextField
                    variant="outlined"
                    name="email"
                    onChange={handleChange}
                    label="E-mail"
                    type="email"
                />
                <TextField
                    variant="outlined"
                    name="password"
                    label="Password"
                    type={'password'}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ backgroundColor: '#000' }}>
                    Einloggen
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
