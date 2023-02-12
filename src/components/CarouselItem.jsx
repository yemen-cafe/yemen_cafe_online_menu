import { Box } from '@mui/material';

const CarouselItem = ({ item }) => {
    const imgStyle = {
        height: '30vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
    };

    return (
        <>
            <Box sx={{ display: 'flex', columnGap: '5px', cursor: 'pointer' }}>
                {item.map((image, i) => {
                    return (
                        <Box
                            key={i}
                            sx={{
                                ...imgStyle,
                                backgroundImage: `url(${image})`,
                            }}></Box>
                    );
                })}
            </Box>
        </>
    );
};

export default CarouselItem;
