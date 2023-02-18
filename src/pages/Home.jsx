import { Avatar, Box, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import menu_bg from '../assets/img/menu_bg.jpg';
import tiktok from '../assets/img/tiktok.jpg';
import insta from '../assets/img/insta.png';
import facebook from '../assets/img/facebook.png';
import { getMenu } from '../helpers/firebase';
import MenuComp from '../components/MenuComp';

const Home = () => {
    const [breakfastData, setBreakfastData] = useState([]);
    const [toastData, setToastData] = useState([]);
    const [hauptspeisenData, setHauptspeisenData] = useState([]);
    const [grillData, setGrillData] = useState([]);
    const [pastaData, setPastaData] = useState([]);
    const [salateData, setSalateData] = useState([]);
    const [sandwichesData, setSandwichesData] = useState([]);
    const [kinderMenuData, setKinderMenuData] = useState([]);
    const [beilagenData, setBeilagenData] = useState([]);
    const [turkischeKaffeeData, setTurkischeKaffeeData] = useState([]);
    const [heissGetranke, setHeissGetranke] = useState([]);
    const [cocktailAndShake, setCocktailAndShake] = useState([]);
    const [kalteGetranke, setKalteGetranke] = useState([]);
    const [specialKaffee, setSpecialKaffee] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [kunefe, setKunefe] = useState([]);

    useEffect(() => {
        getMenu('frühstück').then((res) => setBreakfastData(res));
        getMenu('toast').then((res) => setToastData(res));
        getMenu('hauptspeisen').then((res) => setHauptspeisenData(res));
        getMenu('grill').then((res) => setGrillData(res));
        getMenu('pasta').then((res) => setPastaData(res));
        getMenu('salate').then((res) => setSalateData(res));
        getMenu('sandwiches').then((res) => setSandwichesData(res));
        getMenu('Kinder menu').then((res) => setKinderMenuData(res));
        getMenu('beilagen').then((res) => setBeilagenData(res));
        getMenu('türkische kaffee').then((res) => setTurkischeKaffeeData(res));
        getMenu('heißgetränke').then((res) => setHeissGetranke(res));
        getMenu('cocktail & shake').then((res) => setCocktailAndShake(res));
        getMenu('kalte getränke').then((res) => setKalteGetranke(res));
        getMenu('kaffee sorten').then((res) => setSpecialKaffee(res));
        getMenu('desserts').then((res) => setDesserts(res));
        getMenu('künefe & katmer').then((res) => setKunefe(res));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{ backgroundColor: '#000' }}>
            <Box
                sx={{
                    width: '100%',
                    minHeight: '35vh',
                    boxShadow:
                        'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
                    backgroundImage: `url(${menu_bg})`,
                    backgroundSize: 'cover',
                    position: 'relative',
                }}>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        height: '100%',
                        // eslint-disable-next-line
                        background: 'rgb(0,0,0)',
                        background:
                            'linear-gradient(180deg, rgba(0,0,0,0.7819502801120448) 40%, rgba(0,0,0,0.41220238095238093) 100%)',
                        position: 'absolute',
                    }}>
                    <Typography
                        variant="h1"
                        fontFamily={'customFont'}
                        color="white">
                        MENU
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'start',
                            paddingBottom: '10px',
                            rowGap: '5px',
                        }}>
                        <Link
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '0.8em',
                            }}>
                            {' '}
                            <Avatar
                                src={tiktok}
                                sx={{
                                    width: '2rem',
                                    height: '2rem',
                                    marginRight: '4px',
                                }}
                            />
                            <span>yemenkahvesiwien</span>
                        </Link>
                        <Link
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '0.8em',
                            }}>
                            {' '}
                            <Avatar
                                src={insta}
                                sx={{
                                    width: '2rem',
                                    height: '2rem',
                                    marginRight: '4px',
                                }}
                            />
                            <span>yemenkahvesi_wien</span>
                        </Link>
                        <Link
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                textDecoration: 'none',
                                fontSize: '0.8em',
                            }}>
                            {' '}
                            <Avatar
                                src={facebook}
                                sx={{
                                    width: '2rem',
                                    height: '2rem',
                                    marginRight: '4px',
                                }}
                            />
                            <span>yemenkaffeewien</span>
                        </Link>
                    </Box>
                </Box>
            </Box>
            {/* Breakfast */}

            <MenuComp
                data={breakfastData}
                setData={setBreakfastData}
                heading={'Frühstück'}
            />
            <MenuComp
                data={toastData}
                setData={setToastData}
                heading={'Toast'}
            />
            <MenuComp
                data={sandwichesData}
                setData={setSandwichesData}
                heading={'Sandwiches'}
            />
            <MenuComp
                data={hauptspeisenData}
                setData={setHauptspeisenData}
                heading={'Hauptspeisen'}
            />
            <MenuComp
                data={pastaData}
                setData={setPastaData}
                heading={'Pasta'}
            />

            <MenuComp
                data={salateData}
                setData={setSalateData}
                heading={'Salate'}
            />
            <MenuComp
                data={grillData}
                setData={setGrillData}
                heading={'Grill'}
            />
            <MenuComp
                data={kinderMenuData}
                setData={setKinderMenuData}
                heading={'Kinder Menu'}
            />
            <MenuComp
                data={kunefe}
                setData={setKunefe}
                heading={'Künefe & Katmer'}
            />

            <MenuComp
                data={desserts}
                setData={setDesserts}
                heading={'Desserts'}
            />

            <MenuComp
                data={beilagenData}
                setData={setBeilagenData}
                heading={'Beilagen'}
            />

            <MenuComp
                data={turkischeKaffeeData}
                setData={setTurkischeKaffeeData}
                heading={'Türkische Kaffee'}
            />
            <MenuComp
                data={heissGetranke}
                setData={setHeissGetranke}
                heading={'Heißgetränke'}
            />
            <MenuComp
                data={cocktailAndShake}
                setData={setCocktailAndShake}
                heading={'Cocktail & Shake'}
            />
            <MenuComp
                data={kalteGetranke}
                setData={setKalteGetranke}
                heading={'Kalte Getränke'}
            />
            <MenuComp
                data={specialKaffee}
                setData={setSpecialKaffee}
                heading={'Kaffee Sorten'}
            />
        </Box>
    );
};

export default Home;
