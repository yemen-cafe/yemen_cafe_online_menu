import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import manti from '../assets/mealImg/manti.jpg';

const SpecialMeal = ({ item }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
                sx={{
                    display: 'flex',
                    backgroundColor: '#000',
                    color: '#fff',
                    justifyContent: 'space-between',
                    padding: '1rem',
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                    }}>
                    <Typography
                        variant="h6"
                        textAlign={'left'}
                        sx={{
                            wordBreak: 'break',
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'start',
                            maxWidth: '60%',
                            fontWeight: '600',
                            fontFamily: 'century gothic',
                        }}>
                        Yemen Manti
                        {/* {allergene && allergene != '' && ( */}
                        <span
                            style={{
                                fontSize: '0.6rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#00000089',
                                padding: '3px',
                                borderRadius: '5px',
                                color: 'white',
                                minWidth: '45px',
                                marginLeft: '3px',
                            }}>
                            A,C,G
                        </span>
                        {/* )} */}
                    </Typography>
                    <Box sx={{ maxWidth: '75%', textAlign: 'left' }}>
                        <span
                            style={{
                                textAlign: 'left',
                                fontSize: '0.75rem',
                                wordBreak: 'break-word',
                                fontWeight: '200',
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </span>
                    </Box>
                </Box>
                <Typography
                    variant="h4"
                    sx={{
                        color: 'white',
                        width: '50%',
                        transform: 'rotate(20deg)',
                        // border: '1px solid red',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                    {' '}
                    9.40 $
                </Typography>
            </Box>
            <Box
                sx={{
                    height: '25vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    display: 'flex',
                    // width: '50%',
                    backgroundImage: `url(${manti})`,
                }}></Box>
        </Box>
    );
};

export default SpecialMeal;
