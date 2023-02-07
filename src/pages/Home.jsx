import { Avatar, Box, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import menu_bg from '../assets/img/menu_bg.jpg';
import tiktok from '../assets/img/tiktok.jpg';
import insta from '../assets/img/insta.png';
import facebook from '../assets/img/facebook.png';

import { getMenu } from '../helpers/firebase';
import MenuComp from '../components/MenuComp';

const Home = () => {
    const [breakfastData, setBreakfastData] = useState([]);
    const [toastData, setToastData] = useState([]);

    useEffect(() => {
        getMenu('frühstück').then((res) => setBreakfastData(res));
        getMenu('toast').then((res) => setToastData(res));
    }, []);

    return (
        <Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: '35vh',
                    boxShadow:
                        'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
                    backgroundImage: `url(${menu_bg})`,
                    backgroundSize: 'cover',
                    position: 'relative',
                }}>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        height: '100%',
                        background: 'rgb(0,0,0)',
                        background:
                            'linear-gradient(180deg, rgba(0,0,0,0.7819502801120448) 40%, rgba(0,0,0,0.41220238095238093) 100%)',
                        position: 'absolute',
                    }}>
                    <Typography
                        variant="h1"
                        fontFamily={'customFont'}
                        color="white">
                        MENU
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'start',
                            paddingBottom: '10px',
                            rowGap: '5px',
                        }}>
                        <Link
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '0.8em',
                            }}>
                            {' '}
                            <Avatar
                                src={tiktok}
                                sx={{
                                    width: '2rem',
                                    height: '2rem',
                                    marginRight: '4px',
                                }}
                            />
                            <span>yemenkahvesiwien</span>
                        </Link>
                        <Link
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '0.8em',
                            }}>
                            {' '}
                            <Avatar
                                src={insta}
                                sx={{
                                    width: '2rem',
                                    height: '2rem',
                                    marginRight: '4px',
                                }}
                            />
                            <span>yemenkahvesi_wien</span>
                        </Link>
                        <Link
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '0.8em',
                            }}>
                            {' '}
                            <Avatar
                                src={facebook}
                                sx={{
                                    width: '2rem',
                                    height: '2rem',
                                    marginRight: '4px',
                                }}
                            />
                            <span>yemenkaffeewien</span>
                        </Link>
                    </Box>
                </Box>
            </Box>
            {/* Breakfast */}

            <MenuComp data={breakfastData} heading={'Frühstück'} />
            <MenuComp data={toastData} heading={'Toast'} />
        </Box>
    );
};

export default Home;
