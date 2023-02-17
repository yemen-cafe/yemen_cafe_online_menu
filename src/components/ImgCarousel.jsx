import frühstück1 from '../assets/mealImg/menemen.png';
import frühstück2 from '../assets/mealImg/teigRolle.png';
import frühstück3 from '../assets/mealImg/simitTeller.png';
import frühstück4 from '../assets/mealImg/oFrühstück.png';
import frühstück5 from '../assets/mealImg/omelett.jpg';
import frühstück6 from '../assets/mealImg/suppe.jpg';
import toast1 from '../assets/mealImg/toast1.png';
import toast2 from '../assets/mealImg/toast2.png';
import toast3 from '../assets/mealImg/toast3.jpg';
import toast4 from '../assets/mealImg/toast4.jpg';
import toast5 from '../assets/mealImg/toast5.jpg';
import toast6 from '../assets/mealImg/toast6.jpg';
import sandwich1 from '../assets/mealImg/California-Wrap.png';
import sandwich2 from '../assets/mealImg/club-sandwich.jpg';
import sandwich3 from '../assets/mealImg/Koefte-sandwich.jpg';
import sandwich4 from '../assets/mealImg/chicken-sandwich.jpg';
import sandwich5 from '../assets/mealImg/clubsandwich-1.jpg';
import sandwich6 from '../assets/mealImg/sandwich6.jpg';
import haupt1 from '../assets/mealImg/haupt1.jpg';
import haupt2 from '../assets/mealImg/haupt2.jpg';
import haupt3 from '../assets/mealImg/haupt3.jpg';
import haupt4 from '../assets/mealImg/haupt4.jpg';
import haupt5 from '../assets/mealImg/haupt5.jpg';
import haupt6 from '../assets/mealImg/haupt6.jpg';
import pasta1 from '../assets/mealImg/pasta1.jpg';
import pasta2 from '../assets/mealImg/pasta2.jpg';
import pasta3 from '../assets/mealImg/pasta3.jpg';
import pasta4 from '../assets/mealImg/pasta4.jpg';
import pasta5 from '../assets/mealImg/pasta5.jpg';
import pasta6 from '../assets/mealImg/pasta6.jpg';
import salat1 from '../assets/mealImg/salat1.jpg';
import salat2 from '../assets/mealImg/salat2.jpg';
import salat3 from '../assets/mealImg/salat3.jpg';
import salat4 from '../assets/mealImg/salat4.jpg';
import salat5 from '../assets/mealImg/salat5.jpg';
import salat6 from '../assets/mealImg/salat6.jpg';
import grill1 from '../assets/mealImg/grill1.jpg';
import grill2 from '../assets/mealImg/grill2.jpg';
import grill3 from '../assets/mealImg/grill3.jpg';
import grill4 from '../assets/mealImg/grill4.jpg';
import grill5 from '../assets/mealImg/grill5.jpg';
import grill6 from '../assets/mealImg/grill6.jpg';
import kinder1 from '../assets/mealImg/kinder1.jpg';
import kinder2 from '../assets/mealImg/kinder2.jpg';
import kinder3 from '../assets/mealImg/kinder3.jpg';
import kinder4 from '../assets/mealImg/kinder4.jpg';
import kinder5 from '../assets/mealImg/kinder5.jpg';
import kinder6 from '../assets/mealImg/kinder6.jpg';
import React from 'react';
import CarouselItem from './CarouselItem';
import Carousel from 'react-material-ui-carousel';
// import { Carousel } from 'react-bootstrap';
const toastArr = [toast1, toast2, toast3, toast4, toast5, toast6];
const frühstückArr = [
    frühstück1,
    frühstück2,
    frühstück3,
    frühstück4,
    frühstück5,
    frühstück6,
];
const sandwichArr = [
    sandwich1,
    sandwich2,
    sandwich3,
    sandwich4,
    sandwich5,
    sandwich6,
];
const hauptspeisenArr = [haupt1, haupt2, haupt3, haupt4, haupt5, haupt6];
const pastaArr = [pasta1, pasta2, pasta3, pasta4, pasta5, pasta6];
const salatArr = [salat1, salat2, salat3, salat4, salat5, salat6];
const grillArr = [grill1, grill2, grill3, grill4, grill5, grill6];
const kinderArr = [kinder1, kinder2, kinder3, kinder4, kinder5, kinder6];

const ImgCarousel = ({ heading }) => {
    const slideOrganizer = () => {
        let data = [];
        if (heading === 'Frühstück') {
            data = frühstückArr;
        } else if (heading === 'Toast') {
            data = toastArr;
        } else if (heading === 'Sandwiches') {
            data = sandwichArr;
        } else if (heading === 'Hauptspeisen') {
            data = hauptspeisenArr;
        } else if (heading === 'Pasta') {
            data = pastaArr;
        } else if (heading === 'Salate') {
            data = salatArr;
        } else if (heading === 'Grill') {
            data = grillArr;
        } else if (heading === 'Kinder Menu') {
            data = kinderArr;
        }
        const slide1 = data.slice(0, 2);
        const slide2 = data.slice(2, 4);
        const slide3 = data.slice(4, 6);
        return [slide1, slide2, slide3];
    };

    return (
        <Carousel animation="slide" interval={2500}>
            {slideOrganizer()?.map((item, i) => (
                <CarouselItem key={i} item={item} />
            ))}
        </Carousel>
    );
};

export default ImgCarousel;
