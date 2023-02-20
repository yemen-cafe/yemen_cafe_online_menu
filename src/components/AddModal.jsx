import ClearIcon from '@mui/icons-material/Clear';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {
    Checkbox,
    FormControlLabel,
    IconButton,
    TextField,
} from '@mui/material';
import { addItem, deleteItem, updateItem } from '../helpers/firebase';
import { useAuthContext } from '../context/AuthProvider';

const initialState = {
    title: '',
    preise: ['', ''],
    inhalt: [''],
    allergene: [''],
    extra: [{ name: '', preis: '' }],
    menu: false,
};

function ChildModal({
    item,
    inputVal,
    setInputVal,
    handleSubmit,
    handleClose,
    setOpen,
    heading,
}) {
    const [addExtra, setAddExtra] = useState({});

    const [openChild, setOpenChild] = React.useState(false);
    const handleOpenChild = () => {
        setOpenChild(true);
    };
    const handleCloseChild = () => {
        setOpenChild(false);
    };
    const handleChange = (e) => {
        console.log(addExtra);
        setAddExtra({
            ...addExtra,
            [e.target.name]: e.target.value,
        });
    };
    const handlePushExtra = () => {
        setInputVal({ ...inputVal, extra: [...inputVal.extra, addExtra] });
        setAddExtra({});
        handleCloseChild();
    };

    const handleDelete = () => {
        deleteItem(item?.id, heading);
        handleClose();
    };

    return (
        <>
            {!item?.id && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                        size={'small'}
                        variant="contained"
                        onClick={handleOpenChild}>
                        extra hinzufügen
                    </Button>
                    <Button
                        variant="contained"
                        size={'small'}
                        onClick={(e) => {
                            handleSubmit(e);
                            setOpen(false);
                        }}>
                        submit
                    </Button>
                </Box>
            )}

            {item?.id && (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Button
                        size={'small'}
                        variant="contained"
                        sx={{ backgroundColor: 'green' }}
                        onClick={handleOpenChild}>
                        extra hinzufügen
                    </Button>
                    <Box sx={{ display: 'flex', width: '100%' }}>
                        <Button
                            size={'small'}
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
                            size={'small'}
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
            )}
            <Modal
                hideBackdrop
                open={openChild}
                onClose={handleCloseChild}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description">
                <Box sx={{ ...style, width: '100%' }}>
                    <TextField
                        sx={{ width: '100%' }}
                        variant="outlined"
                        label="Name"
                        name="name"
                        onChange={handleChange}
                        value={addExtra?.name || ''}
                    />
                    <TextField
                        sx={{ width: '100%' }}
                        variant="outlined"
                        label="Preis"
                        name="preis"
                        onChange={handleChange}
                        value={addExtra?.preis || ''}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                        <Button onClick={handleCloseChild}>schließen</Button>
                        <Button onClick={handlePushExtra}>hinzufügen</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    maxHeight: '100vh',
    overflow: 'auto',
};

export default function AddModal({ item, heading, setData, data }) {
    const { extra, inhalt, id, title } = item;
    const { currentUser } = useAuthContext();

    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [inputVal, setInputVal] = useState({
        title,
        preise: item?.preise || ['', ''],
        inhalt: inhalt,
        allergene: item?.allergene,
        extra,
        menu: checked,
    });

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
    const handleDeleteExtra = (i) => {
        let temp = [...inputVal.extra];
        temp.splice(i, 1);
        setInputVal({ ...inputVal, extra: temp });
    };
    const handleCheck = () => {
        setChecked(!checked);
        setInputVal({ ...inputVal, menu: checked });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (item?.id) {
            updateItem(id, inputVal, heading);
        } else {
            addItem(e, inputVal, heading, setData, data);
        }
        setInputVal(initialState);
        handleClose();
    };

    return (
        <div style={{ padding: '0.5rem' }}>
            {item?.id && (
                <Button variant="contained" onClick={handleOpen}>
                    Bearbeiten
                </Button>
            )}
            {!item?.id && (
                <Button
                    variant="contained"
                    sx={{ backgroundColor: 'green' }}
                    onClick={handleOpen}>
                    Hinzufügen
                </Button>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <TextField
                        sx={{ width: '100%' }}
                        variant="outlined"
                        label="Title"
                        value={inputVal?.title || ''}
                        onChange={(e) =>
                            setInputVal({ ...inputVal, title: e.target.value })
                        }
                    />
                    <Box sx={{ display: 'flex' }}>
                        {inputVal?.preise?.map((e, i) => (
                            <TextField
                                key={i}
                                sx={{ width: '100%' }}
                                variant="outlined"
                                label="Preis"
                                value={inputVal?.preise[i] || ''}
                                onChange={(e) => handlePreiseChange(e, i)}
                            />
                        ))}

                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleCheck}
                                    checked={inputVal?.menu || false}
                                />
                            }
                            label="Menü"
                        />
                    </Box>
                    <TextField
                        sx={{ width: '100%' }}
                        variant="outlined"
                        name="allergene"
                        label="Allergene"
                        onChange={(e) =>
                            setInputVal({
                                ...inputVal,
                                allergene: e.target.value,
                            })
                        }
                        value={inputVal?.allergene || ''}
                    />
                    <TextField
                        sx={{ width: '100%' }}
                        variant="outlined"
                        name="inhalt"
                        label="Inhalt"
                        value={inputVal?.inhalt || ''}
                        onChange={(e) =>
                            setInputVal({ ...inputVal, inhalt: e.target.value })
                        }
                    />
                    <Box>
                        <span>extra ...</span>
                        {inputVal?.extra?.map((item, i) => (
                            <Box
                                key={i}
                                sx={{ display: 'flex', alignItems: 'center' }}>
                                <TextField
                                    sx={{ width: '100%' }}
                                    variant="outlined"
                                    label="Name"
                                    name="name"
                                    value={inputVal?.extra[i]?.name || ''}
                                    onChange={(e) => handleExtraChange(e, i)}
                                />
                                <TextField
                                    sx={{ width: '100%' }}
                                    variant="outlined"
                                    label="Preis"
                                    name="preis"
                                    value={inputVal?.extra[i]?.preis || ''}
                                    onChange={(e) => handleExtraChange(e, i)}
                                />
                                <IconButton
                                    onClick={() => handleDeleteExtra(i)}>
                                    <ClearIcon sx={{ color: 'red' }} />
                                </IconButton>
                            </Box>
                        ))}
                        <ChildModal
                            inputVal={inputVal}
                            setInputVal={setInputVal}
                            handleSubmit={handleSubmit}
                            handleClose={handleClose}
                            setOpen={setOpen}
                            item={item}
                            heading={heading}
                        />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
