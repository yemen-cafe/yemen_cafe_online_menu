import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useAuthContext } from '../context/AuthProvider';
import { addItem, deleteItem, updateItem } from '../helpers/firebase';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    rowGap: '8px',
    maxHeight: '100vh',
    overflow: 'auto',
};

export default function EditModal({ item, heading }) {
    const { allergene, extra, inhalt, id, preise, title } = item;

    const { currentUser } = useAuthContext();

    const [open, setOpen] = useState(false);

    const [inputVal, setInputVal] = useState({
        title,
        preise,
        inhalt: inhalt,
        allergene: item?.allergene,
        extra,
    });
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handlePreiseChange = (e, i) => {
        let temp = [...inputVal.preise];
        temp[i] = e.target.value;
        setInputVal({ ...inputVal, preise: temp });
    };
    const handleExtraChange = (e, i) => {
        let temp = [...inputVal.extra];
        temp[i] = { ...temp[i], [e.target.name]: e.target.value };
        setInputVal({ ...inputVal, extra: temp });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateItem(id, inputVal, heading);
        handleClose();
    };
    const handleDelete = () => {
        deleteItem(item?.id, heading);
        handleClose();
    };

    return (
        <div>
            <Button onClick={handleOpen}>Bearbeiten</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box component={'form'} sx={style}>
                    <span>Title...</span>
                    <TextField
                        sx={{ width: '100%' }}
                        variant="outlined"
                        name="title"
                        value={inputVal.title || ''}
                        onChange={(e) =>
                            setInputVal({ ...inputVal, title: e.target.value })
                        }
                        label="Title"
                    />
                    <span>Inhalt...</span>
                    <TextField
                        sx={{ width: '100%' }}
                        id="outlined-multiline-flexible"
                        name="inhalt"
                        label="Inhalt"
                        value={inputVal?.inhalt || ''}
                        onChange={(e) =>
                            setInputVal({ ...inputVal, inhalt: e.target.value })
                        }
                        multiline
                        maxRows={4}
                    />
                    <span>Preise...</span>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {preise?.map((preis, i) => (
                            <TextField
                                sx={{ width: '50%' }}
                                key={preis}
                                variant="outlined"
                                name="preise"
                                value={inputVal.preise[i] || ''}
                                onChange={(e) => handlePreiseChange(e, i)}
                                label="Preise"
                            />
                        ))}
                    </Box>
                    <span>Allergene...</span>
                    <TextField
                        sx={{ width: '100%' }}
                        id="outlined-multiline-flexible"
                        name="allergene"
                        label="Allergene"
                        value={inputVal?.allergene || ''}
                        onChange={(e) =>
                            setInputVal({
                                ...inputVal,
                                allergene: e.target.value,
                            })
                        }
                    />

                    <Box>
                        <span>Extra...</span>
                        {extra?.map((x, i) => (
                            <Box key={i} sx={{ display: 'flex' }}>
                                <TextField
                                    name="name"
                                    variant="outlined"
                                    value={inputVal?.extra[i]?.name || ''}
                                    onChange={(e) => handleExtraChange(e, i)}
                                />
                                <TextField
                                    name="preis"
                                    variant="outlined"
                                    value={inputVal?.extra[i]?.preis || ''}
                                    onChange={(e) => handleExtraChange(e, i)}
                                />
                            </Box>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                        <Button
                            type="submit"
                            sx={{
                                backgroundColor: 'blue',
                                color: 'white',
                                width: '50%',
                            }}
                            onClick={(e) => handleSubmit(e)}>
                            aktualisieren
                        </Button>
                        <Button
                            type="submit"
                            sx={{
                                backgroundColor: 'red',
                                color: 'white',
                                width: '50%',
                            }}
                            onClick={handleDelete}>
                            löschen
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
