import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useAuthContext } from '../context/AuthProvider';

import AddModal from './AddModal';

import Heading from './Heading';

const MenuItem = ({ item, heading }) => {
    const { allergene, title, extra, preise, inhalt, menu } = item;

    const { currentUser } = useAuthContext();
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Crete Round',
                border: '1px solid #00000034',
                padding: '0.5rem 0.5rem',
                backgroundColor: '#fff',
                boxShadow:
                    'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',

                borderBottom: '0.2rem solid #000',
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                    {title}{' '}
                    {allergene && allergene !== '' && (
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
                            {allergene}
                        </span>
                    )}
                </Typography>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        {preise?.map(
                            (x, i) =>
                                x !== '' && (
                                    <div
                                        key={i}
                                        style={{
                                            display: 'flex',
                                            columnGap: '2px',
                                        }}>
                                        <span
                                            style={{
                                                fontSize: '0.7rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}>
                                            {i + 1} P
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '1.2rem',
                                                fontWeight: '600',
                                                display: 'flex',
                                                alignItems: 'end',
                                            }}>
                                            {x} €
                                        </span>
                                    </div>
                                )
                        )}
                    </Box>
                </Box>
            </Box>
            <Box sx={{ maxWidth: '75%', textAlign: 'left' }}>
                <span
                    style={{
                        textAlign: 'left',
                        fontSize: '0.7rem',
                        wordBreak: 'break-word',
                    }}>
                    {inhalt}
                </span>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '5px',
                    // justifyContent: 'center',
                }}>
                {extra?.map(
                    (x, i) =>
                        x?.name !== '' && (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    columnGap: '10px',
                                    color: 'white',
                                    backgroundColor: '#000',
                                    padding: '4px',
                                    borderRadius: '0.3rem',
                                    // minWidth: '75%',
                                    width: '100%',
                                }}>
                                {x.name !== '' && (
                                    <Typography
                                        textAlign={'left'}
                                        sx={{
                                            fontWeight: '600',
                                            fontSize: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                        ⫸ {x.name}
                                    </Typography>
                                )}
                                {x.preis !== '' && (
                                    <Typography
                                        sx={{
                                            fontWeight: '800',
                                            fontSize: '0.8rem',
                                            wordBreak: 'keep-all',
                                            minWidth: '4rem',
                                        }}>
                                        {menu
                                            ? `Menü ${x.preis}`
                                            : `+ ${x.preis}`}{' '}
                                        €
                                    </Typography>
                                )}
                            </div>
                        )
                )}
            </Box>
            {currentUser && <AddModal heading={heading} item={item} />}
        </Container>
    );
};

const MenuComp = ({ heading, data, setData }) => {
    const { currentUser } = useAuthContext();
    return (
        <>
            <Box>
                <Heading heading={heading} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '5px',
                    }}>
                    {data?.map((item, i) => (
                        <MenuItem key={i} heading={heading} item={item} />
                    ))}
                </Box>

                {currentUser && (
                    <AddModal
                        heading={heading}
                        data={data}
                        setData={setData}
                        item={''}
                    />
                )}
            </Box>
        </>
    );
};

export default MenuComp;
