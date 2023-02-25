import { Box } from '@mui/material';
import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const Loading = () => {
    const style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        zIndex: '10',
    };

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                backgroundColor: '#000000a7',
                zIndex: '9',
            }}>
            <Box sx={{ ...style }}>
                <ClimbingBoxLoader
                    size={20}
                    speedMultiplier={1.5}
                    color="#f30000"
                />
            </Box>
            {/* <Box sx={{ ...style, borderColor: 'green' }}></Box>
            <Box sx={{ ...style, borderColor: 'blue' }}></Box>
            <Box sx={{ ...style, borderColor: 'magenta' }}></Box>
            <Box sx={{ ...style, borderColor: 'orange' }}></Box>
            <Box sx={{ ...style, borderColor: 'black' }}></Box> */}
        </Box>
    );
};

export default Loading;
