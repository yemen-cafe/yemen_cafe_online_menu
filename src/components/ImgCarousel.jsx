import menemen from '../assets/mealImg/menemen.png';
import teigRolle from '../assets/mealImg/teigRolle.png';
import simitTeller from '../assets/mealImg/simitTeller.png';
import oFrühstück from '../assets/mealImg/oFrühstück.png';
import toast1 from '../assets/mealImg/toast1.png';
import toast2 from '../assets/mealImg/toast2.png';
import toast3 from '../assets/mealImg/toast3.jpg';
import toast4 from '../assets/mealImg/toast4.jpg';
import toast5 from '../assets/mealImg/toast5.jpg';
import toast6 from '../assets/mealImg/toast6.jpg';
import React from 'react';
import CarouselItem from './CarouselItem';
const toastArr = [toast1, toast2, toast3, toast4, toast5, toast6];

const ImgCarousel = ({ heading }) => {
    const slideOrganizer = () => {
        if (heading === 'Frühstück') {
            let data = toastArr;
            const slide1 = data.slice(0, 3);
            const slide2 = data.slice(3, 6);
            const slide3 = data.slice(6, 9);
            return [slide1, slide2, slide3];
        } else if (heading === 'Toast') {
            let data = toastArr;
            const slide1 = data.slice(0, 2);
            const slide2 = data.slice(2, 4);
            const slide3 = data.slice(4, 6);
            return [slide1, slide2, slide3];
        } /* else if (heading === 'Sandwiches') {
            const slide1 = data.slice(0, 5);
            const slide2 = data.slice(5, 10);
            const slide3 = data.slice(10, 15);
            const slide4 = data.slice(15, 21);
            return [slide1, slide2, slide3, slide4];
        } else if (heading === 'Hauptspeisen') {
            const slide1 = data.slice(0, 5);
            const slide2 = data.slice(5, 10);
            const slide3 = data.slice(10, 15);
            const slide4 = data.slice(15, 21);
            return [slide1, slide2, slide3, slide4];
        } else if (heading === 'Pasta') {
            const slide1 = data.slice(0, 5);
            const slide2 = data.slice(5, 10);
            const slide3 = data.slice(10, 15);
            const slide4 = data.slice(15, 21);
            return [slide1, slide2, slide3, slide4];
        } else if (heading === 'Salate') {
            const slide1 = data.slice(0, 5);
            const slide2 = data.slice(5, 10);
            const slide3 = data.slice(10, 15);
            const slide4 = data.slice(15, 21);
            return [slide1, slide2, slide3, slide4];
        } else if (heading === 'Grill') {
            const slide1 = data.slice(0, 5);
            const slide2 = data.slice(5, 10);
            const slide3 = data.slice(10, 15);
            const slide4 = data.slice(15, 21);
            return [slide1, slide2, slide3, slide4];
        } */
    };
    return (
        <Carousel>
            {slideOrganizer().map((item, i) => (
                <CarouselItem key={i} item={item} />
            ))}
        </Carousel>
    );
};

export default ImgCarousel;
