import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { forwardRef, useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthProvider';
import { getFrühstückMenu } from '../helpers/firebase';
import AddModal from './AddModal';
import EditModal from './EditModal';
import EditModal2 from './EditModal2';
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
                padding: '1rem 0',
                backgroundColor: '#fff',
                boxShadow:
                    'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
                borderTop: '0.2rem solid #000',
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
                    <span
                        style={{
                            fontSize: '0.6rem',
                            display: 'flex',
                            alignItems: 'center',

                            minWidth: '45px',
                        }}>
                        {allergene}
                    </span>
                </Typography>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        {preise?.map(
                            (x, i) =>
                                x != '' && (
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
            <Box>
                {extra?.map(
                    (x, i) =>
                        x?.name != '' && (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    color: 'white',
                                    backgroundColor: '#000',
                                    padding: '4px',
                                    borderRadius: '0.3rem',
                                }}>
                                {x.name != '' && (
                                    <Typography
                                        sx={{
                                            fontWeight: '600',
                                            fontSize: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                        ⫸ {x.name}
                                    </Typography>
                                )}
                                {x.preis != '' && (
                                    <Typography
                                        sx={{
                                            fontWeight: '800',
                                            fontSize: '0.8rem',
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
            {!currentUser && <AddModal heading={heading} item={item} />}
            {/* {!currentUser && <EditModal heading={heading} item={item} />} */}
        </Container>
    );
};

const MenuComp = ({ heading, data }) => {
    return (
        <>
            <Box>
                <Heading heading={heading} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '10px',
                    }}>
                    {data?.map((item) => (
                        <MenuItem
                            key={item?.id}
                            heading={heading}
                            item={item}
                        />
                    ))}
                </Box>
                <AddModal heading={heading} item={''} />
            </Box>
        </>
    );
};

export default MenuComp;
