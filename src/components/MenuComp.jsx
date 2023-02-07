import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { getFrühstückMenu } from '../helpers/firebase';
import EditModal from './EditModal';
import Heading from './Heading';

const MenuItem = ({ item }) => {
    const { allergene, title, extra, preise, inhalt, menu } = item;

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Crete Round',
                border: '1px solid #00000034',
                paddingBottom: '1rem',
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
                        width: '60%',
                        fontWeight: '600',
                        fontFamily: 'century gothic',
                        // borderBottom: '1px solid darkorange',
                    }}>
                    {title}{' '}
                    {allergene?.map((x, i) => (
                        <span
                            key={i}
                            style={{
                                fontSize: '0.7rem',
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            {x},
                        </span>
                    ))}
                </Typography>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        {preise.map((x, i) => (
                            <div
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
                        ))}

                        {/* <Typography>{}</Typography> */}
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {inhalt?.map((x) => (
                    <span
                        key={x}
                        style={{
                            fontSize: '0.7rem',
                        }}>
                        {x},{' '}
                    </span>
                ))}
            </Box>
            <Box>
                {extra?.map((x, i) => (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                        <Typography
                            sx={{ fontWeight: '600', fontSize: '0.8rem' }}>
                            ⫸ {x.name}
                        </Typography>
                        <Typography
                            sx={{ fontWeight: '800', fontSize: '0.8rem' }}>
                            {menu ? `Menü ${x.preis}` : `+ ${x.preis}`} €
                        </Typography>
                    </div>
                ))}
            </Box>
            <EditModal item={item} />
        </Container>
    );
};

const MenuComp = ({ heading, data }) => {
    return (
        <Box>
            <Heading heading={heading} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '10px',
                }}>
                {data?.map((item) => (
                    <MenuItem key={item?.id} item={item} />
                ))}
            </Box>
        </Box>
    );
};

export default MenuComp;
