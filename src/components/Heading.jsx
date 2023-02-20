import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ImgCarousel from './ImgCarousel';
import frühstück from '../assets/img/h-breakfast.jpg';
import grill from '../assets/img/h-grill.jpg';
import kind from '../assets/img/h-kind.jpg';
import kunefe from '../assets/img/h-kunefe.jpg';
import haupt from '../assets/img/h-maincourse.jpg';
import pasta from '../assets/img/h-pasta.jpg';
import salat from '../assets/img/h-salat.jpg';
import sandwich from '../assets/img/h-sandwich.jpg';
import toast from '../assets/img/h-toast.jpg';
import beilage from '../assets/img/h-beilage.jpg';
import cocktail from '../assets/img/h-cocktail.jpg';
import dessert from '../assets/img/h-dessert.jpg';
import heiss from '../assets/img/h-herbal.jpg';
import kaffee from '../assets/img/h-kaffee.jpg';
import kaltget from '../assets/img/h-kaltget.jpg';
import t_kaffee from '../assets/img/h-t-kaffee.jpg';

const Heading = ({ heading }) => {
    let image = '';
    if (heading === 'Frühstück') {
        image = frühstück;
    } else if (heading === 'Toast') {
        image = toast;
    } else if (heading === 'Sandwiches') {
        image = sandwich;
    } else if (heading === 'Hauptspeisen') {
        image = haupt;
    } else if (heading === 'Pasta') {
        image = pasta;
    } else if (heading === 'Salate') {
        image = salat;
    } else if (heading === 'Grill') {
        image = grill;
    } else if (heading === 'Kinder Menu') {
        image = kind;
    } else if (heading === 'Beilagen') {
        image = beilage;
    } else if (heading === 'Türkische Kaffee') {
        image = t_kaffee;
    } else if (heading === 'Desserts') {
        image = dessert;
    } else if (heading === 'Heißgetränke') {
        image = heiss;
    } else if (heading === 'Kalte Getränke') {
        image = kaltget;
    } else if (heading === 'Kaffee Sorten') {
        image = kaffee;
    } else if (heading === 'Künefe & Katmer') {
        image = kunefe;
    } else if (heading === 'Cocktail & Shake') {
        image = cocktail;
    }

    return (
        <Box>
            <div id={heading} />
            <Box
                sx={{
                    height: '10vh',

                    overflow: 'hidden',
                    marginBottom: '0.5rem',
                    position: 'relative',
                }}>
                <Typography
                    fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    variant="h4"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontStyle: 'italic',
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        width: '100%',
                        height: '100%',
                        zIndex: '5',
                        color: '#fff',
                        WebkitTextStroke: '1px #000',
                    }}>
                    {heading}
                </Typography>
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        overflow: 'hidden',
                        filter: 'blur(1px)',
                        opacity: '0.5',
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                    <div
                        style={{
                            borderTop: '50px solid black',
                            borderLeft: '50px solid black',
                            borderRight: '50px solid transparent',
                            borderBottom: '50px solid transparent',
                            width: '0 px',
                            height: '0 px',
                        }}></div>

                    <div
                        style={{
                            borderRight: '50px solid black',
                            borderBottom: '50px solid black',
                            borderTop: '50px solid transparent',
                            borderLeft: '50px solid transparent',
                            width: '0 px',
                            height: '0 px',
                        }}></div>
                </Box>
            </Box>

            <ImgCarousel heading={heading} />
        </Box>
    );
};

export default Heading;
