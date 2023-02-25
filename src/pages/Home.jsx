import { Avatar, Box, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import menu_bg from '../assets/img/menu_bg.jpg';
import tiktok from '../assets/img/tiktok.jpg';
import insta from '../assets/img/insta.png';
import facebook from '../assets/img/facebook.png';
import { getMenu } from '../helpers/firebase';
import MenuComp from '../components/MenuComp';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

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
    //LOADING STATE
    const [loading, setLoading] = useState(true);

    const setDataArr = [
        setBreakfastData,
        setToastData,
        setHauptspeisenData,
        setGrillData,
        setPastaData,
        setSalateData,
        setSandwichesData,
        setKinderMenuData,
        setBeilagenData,
        setTurkischeKaffeeData,
        setHeissGetranke,
        setCocktailAndShake,
        setKalteGetranke,
        setSpecialKaffee,
        setDesserts,
        setKunefe,
    ];
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 1000);
    // }, []);

    useEffect(() => {
        Promise.all([
            getMenu('frühstück'),
            getMenu('toast'),
            getMenu('hauptspeisen'),
            getMenu('grill'),
            getMenu('pasta'),
            getMenu('salate'),
            getMenu('sandwiches'),
            getMenu('Kinder menu'),
            getMenu('beilagen'),
            getMenu('türkische kaffee'),
            getMenu('heißgetränke'),
            getMenu('cocktail & shake'),
            getMenu('kalte getränke'),
            getMenu('kaffee sorten'),
            getMenu('desserts'),
            getMenu('künefe & katmer'),
        ])
            .then((values) => {
                for (let i = 0; i < values.length; i++) {
                    setDataArr[i](values[i]);
                }
            })
            .then(() => setLoading(false));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <Box sx={{ backgroundColor: '#000' }}>
            {loading && <Loading />}

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
                        backgroundColor: 'rgb(0,0,0)',
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
                            {/* <span>yemenkahvesiwien</span> */}
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
                            {/* <span>yemenkahvesi_wien</span> */}
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
                            {/* <span>yemenkaffeewien</span> */}
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
            <Footer />
        </Box>
    );
};

export default Home;
