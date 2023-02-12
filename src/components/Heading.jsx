import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ImgCarousel from './ImgCarousel';

const Heading = ({ heading }) => {
    const imgStyle = {
        //
        maxHeight: '100%',
    };
    return (
        <>
            <div id={heading} />
            <Box
                sx={{
                    height: '10vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                }}>
                <div
                    style={{
                        borderTop: '60px solid black',
                        borderLeft: '60px solid black',
                        borderRight: '60px solid transparent',
                        borderBottom: '60px solid transparent',
                        width: '0 px',
                        height: '0 px',
                    }}></div>
                <Typography
                    fontFamily={'Permanent Marker, cursive'}
                    variant="h5"
                    sx={{
                        // height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    {heading}
                </Typography>
                <div
                    style={{
                        borderRight: '60px solid black',
                        borderBottom: '60px solid black',
                        borderTop: '60px solid transparent',
                        borderLeft: '60px solid transparent',
                        width: '0 px',
                        height: '0 px',
                    }}></div>
            </Box>
            {/* <Box
                sx={{
                    height: '10vh',
                    display: 'flex',
                    justifyContent: 'space-around',
                    overflow: 'auto',
                }}>
                <img src={menemen} style={imgStyle} alt="" />
                <img src={teigRolle} style={imgStyle} alt="" />
                <img src={simitTeller} style={imgStyle} alt="" />
                <img src={oFrühstück} style={imgStyle} alt="" />
            </Box> */}
            <ImgCarousel />
        </>
    );
};

export default Heading;
