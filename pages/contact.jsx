import React from 'react';
import Head from 'next/head';
import Swiper from 'react-id-swiper';
const MutipleSlidesPerView = () => {
    const params = {
        slidesPerView: 6,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    }
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
            </Head>
            <Swiper {...params}>
                <div>Slide #1</div>
                <div>Slide #2</div>
                <div>Slide #3</div>
                <div>Slide #4</div>
                <div>Slide #5</div>
            </Swiper>
        </div>

    )
};
export default MutipleSlidesPerView;
