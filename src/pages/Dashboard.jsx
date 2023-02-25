import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import frühstück from '../assets/mealImg/menemen.png';
import toast from '../assets/mealImg/toast1.png';
import sandwich from '../assets/mealImg/clubsandwich-1.jpg';
import haupt from '../assets/mealImg/haupt2.jpg';
import pasta from '../assets/mealImg/pasta3.jpg';
import salat from '../assets/mealImg/salat1.jpg';
import grill from '../assets/mealImg/grill4.jpg';
import kind from '../assets/mealImg/kinder4.jpg';
import beilage from '../assets/mealImg/beilage1.jpeg';
import heiss from '../assets/mealImg/herbal1.jpg';
import t_kaffee from '../assets/mealImg/t-kaffee2.jpg';
import kunefe from '../assets/mealImg/kinder3.jpg';
import dessert from '../assets/mealImg/dessert4.jpg';
import kaffee from '../assets/mealImg/kaffee6.jpg';
import cocktail from '../assets/mealImg/kinder4.jpg';
import kaltGet from '../assets/mealImg/kaltGet4.jpg';
import { logout } from '../helpers/firebase';
import { useAuthContext } from '../context/AuthProvider';

const drawerWidth = 240;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { currentUser } = useAuthContext();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {[
                    { name: 'Frühstück', img: frühstück },
                    { name: 'Toast', img: toast },
                    { name: 'Sandwiches', img: sandwich },
                    { name: 'Hauptspeisen', img: haupt },
                    { name: 'Pasta', img: pasta },
                    { name: 'Salate', img: salat },
                    { name: 'Grill', img: grill },
                    { name: 'Kinder Menu', img: kind },
                    { name: 'Beilagen', img: beilage },
                    { name: 'Heißgetränke', img: heiss },

                    { name: 'Türkische Kaffee', img: t_kaffee },
                    { name: 'Künefe & Katmer', img: kunefe },
                    { name: 'Desserts', img: dessert },
                    { name: 'Cocktail & Shake', img: cocktail },
                    { name: 'Kaffee Sorten', img: kaffee },
                    { name: 'Kalte Getränke', img: kaltGet },
                ].map((x, index) => (
                    <ListItem
                        key={index}
                        onClick={() => setMobileOpen(false)}
                        disablePadding>
                        <a
                            href={`#${x.name}`}
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                                width: '100%',
                            }}>
                            <ListItemButton
                                sx={{
                                    margin: '0',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                <ListItemText primary={'⩥' + x.name} />
                                <Avatar
                                    sx={{
                                        width: '3rem',
                                        height: '3rem',
                                    }}
                                    src={x.img}
                                />
                            </ListItemButton>
                        </a>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'black',
                }}>
                <Toolbar
                    sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h3"
                            fontFamily={'customFont'}
                            noWrap
                            component="div">
                            YEMEN CAFE
                        </Typography>
                    </Box>
                    {currentUser && (
                        <IconButton
                            onClick={() => logout()}
                            sx={{ backgroundColor: '#580404ac' }}>
                            <LogoutIcon sx={{ color: 'white' }} />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    PaperProps={{
                        sx: {
                            backgroundColor: 'black',
                            color: '#fff',
                        },
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}>
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            backgroundColor: 'black',
                            color: '#fff',
                        },
                    }}
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                    open>
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,

                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Dashboard;
